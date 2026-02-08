// Airtable API service
// Handles all data fetching from Airtable base

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;

const headers = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  'Content-Type': 'application/json',
};

/**
 * Fetch all records from a table
 * @param {string} tableName - Name of the Airtable table
 * @param {object} params - Query parameters (filterByFormula, sort, maxRecords, etc.)
 * @returns {Promise<Array>} Array of records
 */
export async function fetchRecords(tableName, params = {}) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.filterByFormula) {
      queryParams.append('filterByFormula', params.filterByFormula);
    }
    
    if (params.sort) {
      params.sort.forEach((sortItem, index) => {
        queryParams.append(`sort[${index}][field]`, sortItem.field);
        queryParams.append(`sort[${index}][direction]`, sortItem.direction || 'asc');
      });
    }
    
    if (params.maxRecords) {
      queryParams.append('maxRecords', params.maxRecords);
    }

    const url = `${AIRTABLE_API_URL}/${encodeURIComponent(tableName)}?${queryParams}`;
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.records;
  } catch (error) {
    console.error(`Error fetching from ${tableName}:`, error);
    throw error;
  }
}

/**
 * Fetch a single record by ID
 * @param {string} tableName - Name of the Airtable table
 * @param {string} recordId - Airtable record ID
 * @returns {Promise<object>} Single record
 */
export async function fetchRecord(tableName, recordId) {
  try {
    const url = `${AIRTABLE_API_URL}/${encodeURIComponent(tableName)}/${recordId}`;
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching record ${recordId} from ${tableName}:`, error);
    throw error;
  }
}

/**
 * Fetch all albums with their metadata
 * @param {boolean} featuredOnly - Only return featured albums
 * @returns {Promise<Array>} Array of album objects
 */
export async function fetchAlbums(featuredOnly = false) {
  const params = {
    sort: [{ field: 'Sort Order', direction: 'asc' }],
  };
  
  if (featuredOnly) {
    params.filterByFormula = '{Featured} = TRUE()';
  }
  
  const records = await fetchRecords('Albums', params);
  
  return records.map(record => ({
    id: record.id,
    name: record.fields.Name,
    slug: record.fields.Slug,
    description: record.fields.Description,
    coverImage: record.fields['Cover Image']?.[0]?.url,
    category: record.fields.Category,
    featured: record.fields.Featured,
    sortOrder: record.fields['Sort Order'],
    photoCount: record.fields.Photos?.length || 0,
  }));
}

/**
 * Fetch a single album by slug
 * @param {string} slug - Album slug
 * @returns {Promise<object>} Album object with photos
 */
export async function fetchAlbumBySlug(slug) {
  const params = {
    filterByFormula: `{Slug} = '${slug}'`,
    maxRecords: 1,
  };
  
  const records = await fetchRecords('Albums', params);
  
  if (records.length === 0) {
    throw new Error(`Album with slug '${slug}' not found`);
  }
  
  const record = records[0];
  const photoIds = record.fields.Photos || [];
  
  // Fetch all photos for this album
  const photos = photoIds.length > 0 ? await fetchPhotosByIds(photoIds) : [];
  
  return {
    id: record.id,
    name: record.fields.Name,
    slug: record.fields.Slug,
    description: record.fields.Description,
    coverImage: record.fields['Cover Image']?.[0]?.url,
    category: record.fields.Category,
    photos,
  };
}

/**
 * Fetch photos by album
 * @param {string} albumId - Airtable album record ID
 * @returns {Promise<Array>} Array of photo objects
 */
export async function fetchPhotosByAlbum(albumId) {
  const params = {
    filterByFormula: `FIND('${albumId}', ARRAYJOIN({Album}))`,
  };
  
  const records = await fetchRecords('Photos', params);
  
  return records.map(record => ({
    id: record.id,
    title: record.fields.Title,
    slug: record.fields.Slug,
    image: record.fields['Image (Watermarked)']?.[0]?.url || record.fields['Image (Original)']?.[0]?.url,
    imageOriginal: record.fields['Image (Original)']?.[0]?.url,
    story: record.fields.Story,
    location: record.fields.Location,
    year: record.fields.Year,
    featured: record.fields.Featured,
    availableForSale: record.fields['Available for Sale'],
    basePrice: record.fields['Base Price (USD)'],
    tags: record.fields.Tags || [],
  }));
}

/**
 * Fetch multiple photos by their IDs
 * @param {Array<string>} photoIds - Array of Airtable photo record IDs
 * @returns {Promise<Array>} Array of photo objects
 */
async function fetchPhotosByIds(photoIds) {
  // Airtable formula to match multiple IDs
  const idFormula = photoIds.map(id => `RECORD_ID() = '${id}'`).join(',');
  const params = {
    filterByFormula: `OR(${idFormula})`,
  };
  
  const records = await fetchRecords('Photos', params);
  
  return records.map(record => ({
    id: record.id,
    title: record.fields.Title,
    slug: record.fields.Slug,
    image: record.fields['Image (Watermarked)']?.[0]?.url || record.fields['Image (Original)']?.[0]?.url,
    imageOriginal: record.fields['Image (Original)']?.[0]?.url,
    story: record.fields.Story,
    location: record.fields.Location,
    year: record.fields.Year,
    featured: record.fields.Featured,
    availableForSale: record.fields['Available for Sale'],
    basePrice: record.fields['Base Price (USD)'],
    tags: record.fields.Tags || [],
  }));
}

/**
 * Fetch a single photo by slug
 * @param {string} slug - Photo slug
 * @returns {Promise<object>} Photo object
 */
export async function fetchPhotoBySlug(slug) {
  const params = {
    filterByFormula: `{Slug} = '${slug}'`,
    maxRecords: 1,
  };
  
  const records = await fetchRecords('Photos', params);
  
  if (records.length === 0) {
    throw new Error(`Photo with slug '${slug}' not found`);
  }
  
  const record = records[0];
  
  return {
    id: record.id,
    title: record.fields.Title,
    slug: record.fields.Slug,
    image: record.fields['Image (Watermarked)']?.[0]?.url || record.fields['Image (Original)']?.[0]?.url,
    imageOriginal: record.fields['Image (Original)']?.[0]?.url,
    story: record.fields.Story,
    location: record.fields.Location,
    year: record.fields.Year,
    featured: record.fields.Featured,
    availableForSale: record.fields['Available for Sale'],
    basePrice: record.fields['Base Price (USD)'],
    tags: record.fields.Tags || [],
  };
}

/**
 * Fetch featured photos across all albums
 * @param {number} limit - Maximum number of photos to return
 * @returns {Promise<Array>} Array of photo objects
 */
export async function fetchFeaturedPhotos(limit = 12) {
  const params = {
    filterByFormula: '{Featured} = TRUE()',
    maxRecords: limit,
  };
  
  const records = await fetchRecords('Photos', params);
  
  return records.map(record => ({
    id: record.id,
    title: record.fields.Title,
    slug: record.fields.Slug,
    image: record.fields['Image (Watermarked)']?.[0]?.url || record.fields['Image (Original)']?.[0]?.url,
    story: record.fields.Story,
    location: record.fields.Location,
    year: record.fields.Year,
  }));
}
