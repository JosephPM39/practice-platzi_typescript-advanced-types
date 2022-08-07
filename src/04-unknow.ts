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


//La principal diferencia de any vs unknow, es que unknow
//no permite realizar ninguna acción con el valor si primero
//no es validado para estar seguros del tipo del valor``
let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};


// unknowVar.doSomething(); // esto genera error
// Se tiene que validar primero el tipo
if (typeof unknowVar === 'string') {
  // Una vez validado el tipo de dato, es posible
  // regresar a las bondades de typescript como el tipado
  // de datos y el análisis de código estático
  unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

//Ejemplo de una función que retorna un JSON con contenido unknow
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

//Conclusión, es altamente recomendable usar "unknow" en lugar de "any"
//simpre debe evitarse "any" lo más que sea posible
