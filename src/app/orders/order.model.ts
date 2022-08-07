//require other interfaces to create order interface
import { BaseModel } from '../base.model';
import { Product } from './../products/product.model';
import { User } from './../users/user.model';

export interface Order extends BaseModel {
  createdAt: Date;
  products: Product[];
  user: User;
}
