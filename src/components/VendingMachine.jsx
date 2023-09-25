import Product from "./Product";
import { products } from "../data/products";

function VendingMachine() {
  return (
    <div className="vending-machine">
      {products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default VendingMachine;
