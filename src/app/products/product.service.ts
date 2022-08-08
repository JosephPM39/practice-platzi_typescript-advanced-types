import { faker } from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';


//Using a complex interace
export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: Product) => {
  //code
}

const deleteProduct = (id: string): void => {
  //code
}

const getProduct = (id: string): void => {
  //code
}
