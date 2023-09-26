import Product from "./Product";
import { products } from "../data/products";
import MoneyInsert from "./MoneyInsert";
import { useSelector } from "react-redux";

function VendingMachine() {
  const state = useSelector((state) => state);

  return (
    <div className="vending-machine">
      {products.map((product) => (
        <Product product={product} />
      ))}
      <MoneyInsert />
      <h2>Your Balance: {state.userBalance} ₺</h2>
      <h2>Selected Product: {state.selectedProduct.name}</h2>
    </div>
  );
}

export default VendingMachine;
