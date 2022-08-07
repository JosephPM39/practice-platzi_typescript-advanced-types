import { Product } from './product.model';

//Using a complex interace
export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}
