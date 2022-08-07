//Global base model interface
//All interfaces that extends from this, will have the next statments
export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
