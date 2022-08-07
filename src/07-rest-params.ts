import { User, ROLES } from './01-enums';

//Planteando un problema

const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

//Podemos tener una función que checkea si el rol de un usuario es Admin

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

//Pero si en eso pensamos en evaluar al menos dos roles del usuario,
//porque nuestra app posee otros roles, se hace pesado y obligatorio
//escribir 2 parámetros, uno para cada rol

export const checkRole = (role1: string, role2:string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);
//Si lo pensamos, podríamos usar un array, pero esto
//implica que deberíamos pasar un solo argumento, un array
//En lugar de múltiples argumentos (parámtros)
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}


//Ahora pensemos, si nuestra app posee muchos roles, o es indifinida la cantidad de roles
//¿Como podríamos solucionar este problema?, agregar más parámetros y estarlos cambiando no
//es buena opción
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

//Es aquí donde aparece la necesidad de un rest param,
//hace una funcion similar al speeard operator cuando
//queremos concatenar objetos, en este caso
//expone los parámetros que se le hayan pasado, adjuntandolos
//en un sola variable interna de la función
//y podemos recorrelo como un array fácilmente
//Su sintaxis es "...<variableName>: <type>[]"
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

//De esta forma, obtenemos una función que es capaz de validar cualquier rol
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV2', rta4);
