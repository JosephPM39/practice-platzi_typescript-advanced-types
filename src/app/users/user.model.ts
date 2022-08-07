import { BaseModel } from "../base.model";

//To determinate role
export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
