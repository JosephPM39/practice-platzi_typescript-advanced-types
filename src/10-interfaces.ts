type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

//Funcionan igual que los types, excento que no pueden usarse como un Union Type.
//La razón de utilizar interface en lugar de un clásico type alias
//es que interface permite ser extendida (o heredada) e implementada
//esa característica le da mucho poder para poder definir tipos complejos
//sin necesidad de reescribir tanto código
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

//Comprobando que la interface funciona de igual forma
const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
