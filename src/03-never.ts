//Typescript acá detecta que esta función es de return never
//Puesto jamás terminará de ejecutarse
const withoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
}

//Otra función que nunca terminará de igual forma
//Puesto una excepción lo que hace es finalizar de forma
//forzada, lo que genera un never
const fail = (message: string) => {
  throw new Error(message);
}

//Esta función puede retornar un string o never
//en estos casos, es necesario validar las funciones
//que invocamos, puesto podría ocacionar problemas
const example = (input: unknown): string | never => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
}


console.log(example('Hola'));
console.log(example([1,1,1,1]));
console.log(example(1212)); // se detiene el programa detiene
//esto ya no se puede ejecutar
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
