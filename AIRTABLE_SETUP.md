# Airtable Base Setup Guide
## Brian Chang Prints - Database Schema

This document outlines the exact Airtable base structure you need to create. Follow this step-by-step to set up your photography print shop database.

---

## Base Name
**Brian Chang Prints**

---

## Tables & Fields

### 1. **Albums** (Collections Table)

This table organizes your photos into themed collections (e.g., "Taiwan Landscapes", "Mountain Ranges", "Seascapes").

| Field Name | Field Type | Description | Required | Example |
|------------|------------|-------------|----------|---------|
| `Name` | Single line text | Album title | ✅ | "Taiwan Highlands" |
| `Slug` | Single line text | URL-friendly version (lowercase, no spaces) | ✅ | "taiwan-highlands" |
| `Description` | Long text | 2-4 sentences telling the story of this collection | ✅ | "Captured during my journey through central Taiwan, these images reveal the mystical interplay of light and mist across ancient mountain ranges..." |
| `Cover Image` | Attachment | The hero image representing this album | ✅ | (upload image) |
| `Category` | Single select | Genre/theme | Optional | Nature, Travel, Mountains, Seascapes, Taiwan, etc. |
| `Featured` | Checkbox | Show on homepage? | Optional | ☑️ |
| `Sort Order` | Number | Display priority (lower = shown first) | Optional | 1, 2, 3... |
| `Photos` | Linked record → Photos | Links to photos in this album | Auto | (will link from Photos table) |
| `Created` | Created time | Auto-timestamp | Auto | |

**Single Select Options for Category:**
- Nature
- Mountains
- Seascapes
- Taiwan
- Travel
- Wildlife
- Landscapes
- Urban
- (add more as needed)

---

### 2. **Photos** (Individual Images Table)

Every print-ready photo lives here with its metadata, story, and pricing.

| Field Name | Field Type | Description | Required | Example |
|------------|------------|-------------|----------|---------|
| `Title` | Single line text | Photo name | ✅ | "Misty Peak at Dawn" |
| `Slug` | Single line text | URL-friendly (lowercase, hyphens) | ✅ | "misty-peak-at-dawn" |
| `Image (Original)` | Attachment | High-res image file | ✅ | (upload) |
| `Image (Watermarked)` | Attachment | Version with 张 watermark for web display | ✅ | (upload watermarked version) |
| `Story` | Long text | 1-3 paragraphs about the photo — where, when, why it matters | Optional | "This image was taken at 5:47am on Hehuanshan..." |
| `Album` | Linked record → Albums | Which collection does this belong to? | ✅ | Taiwan Highlands |
| `Location` | Single line text | Where was this shot? | Optional | "Hehuanshan, Taiwan" |
| `Year` | Number | Year captured | Optional | 2024 |
| `Featured` | Checkbox | Show in featured galleries? | Optional | ☑️ |
| `Available for Sale` | Checkbox | Is this print currently offered? | ✅ | ☑️ |
| `Base Price (USD)` | Currency | Your base markup for smallest print | Optional | $45.00 |
| `Tags` | Multiple select | Searchable keywords | Optional | mountain, mist, sunrise, Taiwan |
| `Created` | Created time | Auto-timestamp | Auto | |

**Multiple Select Options for Tags:**
- mountain
- ocean
- sunrise
- sunset
- mist
- wildlife
- forest
- taiwan
- travel
- minimalist
- dramatic
- serene
- (expand as you categorize)

---

### 3. **Orders** (Optional for Phase 1, but set it up now)

Tracks customer purchases. This will be auto-populated once Stripe + Printful integration is live.

| Field Name | Field Type | Description | Required |
|------------|------------|-------------|----------|
| `Order ID` | Single line text | Unique identifier | ✅ |
| `Customer Email` | Email | Buyer's email | ✅ |
| `Customer Name` | Single line text | Full name | Optional |
| `Total (USD)` | Currency | Order total | ✅ |
| `Status` | Single select | Order state | ✅ |
| `Items` | Long text | JSON of purchased items | ✅ |
| `Printful Order ID` | Single line text | External fulfillment reference | Optional |
| `Stripe Payment ID` | Single line text | Payment reference | Optional |
| `Created` | Created time | Purchase timestamp | Auto |

**Single Select Options for Status:**
- Pending
- Paid
- Sent to Printful
- In Production
- Shipped
- Delivered
- Cancelled
- Refunded

---

## Setup Checklist

### Step 1: Create the Base
1. Go to [airtable.com](https://airtable.com)
2. Create a new base called **"Brian Chang Prints"**

### Step 2: Create Tables
1. Rename the default table to **"Albums"**
2. Add all fields from the Albums table above
3. Create a new table called **"Photos"**
4. Add all fields from the Photos table above
5. Create a new table called **"Orders"**
6. Add all fields from the Orders table above

### Step 3: Set Up Linked Records
- In **Photos** table → `Album` field → Link to **Albums** table
- In **Albums** table → `Photos` field → Link to **Photos** table (will auto-create)

### Step 4: Add Your First Album (Test Data)
1. Go to **Albums** table
2. Add a row:
   - **Name**: "Taiwan Highlands"
   - **Slug**: "taiwan-highlands"
   - **Description**: "Captured during my journey through central Taiwan, these images reveal the mystical interplay of light and mist across ancient mountain ranges where nature still commands silence and reverence."
   - **Cover Image**: (upload one of your best Taiwan mountain shots)
   - **Category**: Mountains
   - **Featured**: ☑️
   - **Sort Order**: 1

### Step 5: Add Photos to That Album
1. Go to **Photos** table
2. Add 5-10 photos from that collection:
   - Fill in Title, Slug, Image files, Story, link to Album
   - Mark **Available for Sale** as checked
   - Add relevant Tags

### Step 6: Get Your API Credentials
1. Go to [airtable.com/account](https://airtable.com/account)
2. Generate a **Personal Access Token** with these scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
3. Copy the token (you'll need this for the app)
4. Get your **Base ID**:
   - Open your base
   - Go to Help → API Documentation
   - Your Base ID is shown at the top (starts with `app...`)

---

## Image Guidelines

### For Web Display (Watermarked):
- **Resolution**: 1200-1600px on longest side (sharp but not print-ready)
- **Format**: JPEG, optimized for web (~150-300kb per image)
- **Watermark**: 张 logo in bottom right corner, 15-20% opacity, white or light grey

### For Original (High-Res):
- **Resolution**: Full resolution from your camera (for future download delivery)
- **Format**: JPEG or PNG, minimal compression
- **Storage**: Keep these in Airtable for now (later we may move to Cloudinary for optimization)

---

## Next Steps

Once you've set up the base with at least **2-3 albums and 10-15 photos**, send me:
1. Your **Airtable Base ID** (starts with `app...`)
2. Your **Personal Access Token** (keep this private, send via secure method)

I'll integrate it into the app and you'll see your real photos live on the site immediately.

---

**Questions?** Let me know if anything is unclear. This structure will scale beautifully as your catalog grows.
