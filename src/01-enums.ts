//Los enums funcionan como listas de clave/valor, como un hashmap de java por ejemplo,
//la cuestión aquí es que nos sirven para validar las opciones predefinidas para alguna
//variable, evitando valores no soportados, y tambien en lugar de usar literal types
//
//Se recomienda como standard nombrarlos en mayúsculas, de igual forma las claves que contenga
export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "cst",
}

//Ejemplo de uso
export type User = {
  username: string;
  role: ROLES;
}

const newUser: User = {
  username: "somebody",
  //No obstante, a diferencia de los literal types, acá debemos hacer uso explícito del enum como un objeto
  //para obtener el valor a usar, o sea, la forma "role: 'admin'" no está permitida, si no lo siguiente:
  role: ROLES.ADMIN
}
