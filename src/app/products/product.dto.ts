import { Product } from './product.model';

//Creating a DTO with Omit
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

//Example with Pick (inverse of Omit)
type example = Pick<Product, 'color' | 'description'>;

//Creating a DTO where all properties are optional with Partial<>
export interface UpdateProductDto extends Partial<CreateProductDto>, Pick<Product, 'id'> {}

//Example with Required (inverse of Partial)
type example2 = Required<Product>;
