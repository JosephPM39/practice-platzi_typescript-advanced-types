import { Product } from './product.model';

//Using a complex interace
export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //This is imposible, because id in the product interface,
  //is declare as readonly property
  //data.id = 23;
  //the same happen for
  //data.createdAt = new Date(1998, 1, 1);
  products.push(data);
}
