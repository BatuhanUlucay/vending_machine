import Product from "./Product";
import { products } from "../data/products";
import MoneyInsert from "./MoneyInsert";
import { useSelector } from "react-redux";
import LoginContainer from "./LoginContainer";
import SessionExpire from "./SessionExpire";

function VendingMachine() {
  const state = useSelector((state) => state);

  const FIVE_MINS_IN_MS = 5 * 60 * 1000;
  const dateTimeAfterFiveMins = new Date().getTime() + FIVE_MINS_IN_MS;

  if (!state.isLoggedIn) {
    return <LoginContainer />;
  }

  return (
    <div className="vending-machine">
      <SessionExpire targetDate={dateTimeAfterFiveMins} />
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
