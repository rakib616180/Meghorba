export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  material: string;
  size: string;
}

export interface CartItem extends Product {
  quantity: number;
}
