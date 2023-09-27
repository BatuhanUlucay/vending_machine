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
    dispatch(resetMachine());
  }

  function handleLogoutClick() {
    dispatch(logout());
  }

  return (
    <div>
      Machine Balance = {state.machineBalance}
      <button onClick={handleCollectMoneyClick}>Collect Money</button>
      <button onClick={handleResetProductsClick}>Reset Products</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default SupplierDashboard;
