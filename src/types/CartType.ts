import { Product } from './Product';

export type CartType = {
  product: Product;
  id: string;
  quantity: number;
};
