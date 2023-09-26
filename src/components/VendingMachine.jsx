import Product from "./Product";
import { products } from "../data/products";
import MoneyInsert from "./MoneyInsert";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";

function VendingMachine() {
  const state = useSelector((state) => state);

  if (!state.isLoggedIn) {
    return <LoginContainer />;
  }

  return (
    <div className="vending-machine">
      {products.map((product) => (
        <Product product={product} />
      ))}
      <MoneyInsert />
      <h2>Your Balance: {state.userBalance} ₺</h2>
      {state.selectedProduct && (
        <h2>Selected Product: {state.selectedProduct.name}</h2>
      )}
    </div>
  );
}

export default VendingMachine;
