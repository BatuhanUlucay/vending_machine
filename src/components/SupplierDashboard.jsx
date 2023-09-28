import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectMoney, resetMachine } from "../redux/actions";
import { logout } from "../redux/actions";

function SupplierDashboard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleCollectMoneyClick() {
    if (state.machineBalance <= 0) {
      alert("There is no money in the machine right now.");
    } else {
      alert(`Here is your ${state.machineBalance}  ₺. Have a nice day!`);
      dispatch(collectMoney());
    }
  }

  function handleResetProductsClick() {
    const currentProducts = state.products;
    if (isMachineAlreadyFull(currentProducts)) {
      alert("Machine is already full of products!");
    } else {
      alert(`All product quantities are set to 5.`);
      dispatch(resetMachine());
    }
  }

  function isMachineAlreadyFull(products) {
    const productQuantity = products.reduce(
      (quantity, currentProduct) => currentProduct.quantity + quantity,
      0
    );
    return productQuantity === 15;
  }

  function handleLogoutClick() {
    dispatch(logout());
  }

  return (
    <div className="supplier-dashboard">
      Machine Balance = {state.machineBalance}
      <button onClick={handleCollectMoneyClick}>Collect Money</button>
      <button onClick={handleResetProductsClick}>Reset Products</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default SupplierDashboard;
