//Global base model interface
//All interfaces that extends from this, will have the next statments
export interface BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
