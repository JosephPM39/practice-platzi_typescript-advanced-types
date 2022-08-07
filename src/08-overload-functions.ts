// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

//El problema con el retorno de esta función, es que typescript no infiere lógica
//solo código, y el detalle crucial es que esta funcion puede retornar 2 tipos de datos
//diferentes, lo cual impide usar el dato resultante como un tipo de dato específico
//resultando en un problema de inferencia de datos
const rtaArray = parseStr('Nico');
// rtaArray.reverse(); // no podemos hacer uso de esta función...
if (Array.isArray(rtaArray)) {
  //...Hasta que probemos que es un array
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>' ,rtaArray);

const rtaStr = parseStr(['N','i','c','o']);
// rtaStr.toLowerCase(); // de igual forma no podemos manipular el string...
if (typeof rtaStr === 'string') {
  //...hasta que probamos que es un string
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);
