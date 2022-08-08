import { faker } from '@faker-js/faker';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto';
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

//Using index type on Id param
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // This is impossible, because FindProductDTO's properties are readonly
  // code
  // dto.color = 'blue';
  // dto.isNew = true;
  return products;
}

const deleteProduct = (id: string): void => {
  //code
}

const getProduct = (id: string): void => {
  //code
}
