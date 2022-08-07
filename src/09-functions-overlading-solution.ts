// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

// Realizando sobrecarga de funciones en los tipos
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// La función sobre cargada debe ahora recibir un
// parámetro de tipo unknown así como el retorno
export function parseStr(input: unknown): unknown {
  // Realizamos la lógica según el tipo de dato
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; // boolean
  }
}

const rtaArray = parseStr('Nico');
rtaArray.reverse();
console.log('rtaArray', 'Nico =>' ,rtaArray);

const rtaStr = parseStr(['N','i','c','o']);
rtaStr.toLowerCase();
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);

const rtaBoolean = parseStr(12);
