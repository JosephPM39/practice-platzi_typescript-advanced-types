//Required for product interface
import { BaseModel } from '../base.model';
import { Category } from './../categories/category.model';

//Complex interface example
export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: Category;
}
