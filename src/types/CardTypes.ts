export type CardTypes = {
  variant: "horizontal" | "vertical"; 
  imageUrl: string; 
  title: string; 
  price: number;
  type: 'rent' | 'sale'; 
  tags: string[]; 
  address: string; 
  facts: string[];
}