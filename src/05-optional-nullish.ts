export const createProduct = (
  id: string | number,
	//Parámetros opcionales, estos deben ir al final de los no opcionales
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
		//<Si el valor es null o undefine> ?? <asigna...>
		//Muy útil si recibimos el stock undefined, asignamos uno por defecto
		//Si usáramos el operador "||" en lugar de "??", tendríamos
		//un grave error si el stock viene como 0, se interpretaría como falso
		//dando como resultado un calculo erróneo, puesto asignaría 10 como stock
		//en lugar de 0, a nivel de lógica de negocio es un error enorme
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

//En el caso de usar "||" en lugar de ??"
// 0 === false
// '' === false
// false === false

//Este tipo de operador "??" llamado nullish coalescing operator, resuelve
//inconvenientes del operador "||", debido que este ultimo interpreta 0, false
//ó un string vacío, como falso o valor no enviado, haciendo que se asignen los
//valores por defecto, generando un comportamiento no esperado.


//Probando crear un producto con y sin los parámetros opcionales
const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
