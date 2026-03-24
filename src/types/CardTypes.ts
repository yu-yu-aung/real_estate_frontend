export type CardTypes = {
  id?: number;
  variant?: "horizontal" | "vertical"; 
  imageUrl: string; 
  title: string; 
  price: number;
  type: 'rent' | 'sale'; 
  tags: string[]; 
  address: string; 
  facts: string[];
}