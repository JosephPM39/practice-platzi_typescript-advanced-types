const numbers: ReadonlyArray<number> = [1,2,2,2];
//These methods doesn't works with ReadonlyArray type, it's generate errors
//because modify the original array
//numbers.push(9);
//numbers.pop();
//numbers.unshift(1);
//This work fine
numbers.filter(()=> {})
numbers.reduce(() => 0)
numbers.map(() => 0)

