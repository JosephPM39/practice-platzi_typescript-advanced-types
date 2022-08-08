import { Product } from './product.model';

//Creating a DTO with Omit
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

//Example with Pick (inverse of Omit)
type example = Pick<Product, 'color' | 'description'>;
