export interface Comic {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  category: string; // Ej: Marvel, DC, Image
  isNew?: boolean;
}
