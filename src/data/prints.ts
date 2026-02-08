import { PrintData } from "@/components/PrintCard";

import printOcean from "@/assets/print-ocean.jpg";
import printDesert from "@/assets/print-desert.jpg";
import printForest from "@/assets/print-forest.jpg";
import printCoast from "@/assets/print-coast.jpg";
import printAlpine from "@/assets/print-alpine.jpg";
import printPastoral from "@/assets/print-pastoral.jpg";
import printUrban from "@/assets/print-urban.jpg";

export const prints: PrintData[] = [
  {
    id: "1",
    title: "Dawn Serenity",
    category: "Seascapes",
    image: printOcean,
    price: 185,
  },
  {
    id: "2",
    title: "Golden Dunes",
    category: "Landscapes",
    image: printDesert,
    price: 220,
  },
  {
    id: "3",
    title: "Morning Mist",
    category: "Forests",
    image: printForest,
    price: 195,
  },
  {
    id: "4",
    title: "Coastal Drama",
    category: "Seascapes",
    image: printCoast,
    price: 245,
  },
  {
    id: "5",
    title: "Alpine Majesty",
    category: "Mountains",
    image: printAlpine,
    price: 275,
  },
  {
    id: "6",
    title: "Solitary Oak",
    category: "Landscapes",
    image: printPastoral,
    price: 210,
  },
  {
    id: "7",
    title: "Urban Lines",
    category: "Architecture",
    image: printUrban,
    price: 165,
  },
];
