//No se debe confundir una tupla con el tipado de array básico
//Puesto lo siguiente
const prices: (number | string)[] = [1,'sadf', 23,4,3,6, '2'];
//Permite Agregar más datos aumentando la longitud
prices.push(23);

//Mientras que la tupla:
//(que se declara con la siguiente sintaxis)
const user: [number, string] = [1, '2'];
//Estamos declarando de forma explícita el tamaño del arreglo,
//el tipo de dato en cada posición, y su longitud,
//Y no es posible agregar más elementos
//En este caso dictamos que "user" será un arreglo de longitud dos, el primer
//elemento será numérico y el segundo un string


//No obstante, la tupla sigue siendo mutable, y se debe tener cuidado
//Puesto hacer lo siguiente
user.push('Hola');
console.log(user);
// ESTO DARÍA ERROR: Error: Tuple type ‘[string, number]’ of length ‘2’ has no element at index ‘2’.
// console.log(user[2]);
// Aunque es posible acceder al dato con:
user.map(item => console.log(item));
// o con:
console.log(user.at(-1)) // 'Hola'

// De igual forma es posible tener una tupla sin límites de datos, de la siguietes formas:
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

//Otra utilidad de las tuplas es la facilidad para destructurar la información:
const [age, username] = user //* Destructuración de una tupla
console.log(username) //* 'mike'
console.log(age) //* 23
