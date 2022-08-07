//Con any como se vio en el curso anterior, se pierde todas las utilidades de typescript
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();


//La principal diferencia de any vs unknown, es que unknown
//no permite realizar ninguna acción con el valor si primero
//no es validado para estar seguros del tipo del valor``
let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};


// unknownVar.doSomething(); // esto genera error
// Se tiene que validar primero el tipo
if (typeof unknownVar === 'string') {
  // Una vez validado el tipo de dato, es posible
  // regresar a las bondades de typescript como el tipado
  // de datos y el análisis de código estático
  unknownVar.toUpperCase();
}
if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

//Ejemplo de una función que retorna un JSON con contenido unknown
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

//Conclusión, es altamente recomendable usar "unknown" en lugar de "any"
//simpre debe evitarse "any" lo más que sea posible
