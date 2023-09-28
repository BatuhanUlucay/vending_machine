import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectMoney, resetMachine, showPopup } from "../../redux/actions";
import { logout } from "../../redux/actions";
import { isMachineAlreadyFull } from "../../util/machineUtils";

function SupplierDashboard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleCollectMoneyClick() {
    if (state.machineBalance <= 0) {
      dispatch(showPopup("There is no money in the machine right now."));
    } else {
      dispatch(
        showPopup(`Here is your ${state.machineBalance}  ₺. Have a nice day!`)
      );
      dispatch(collectMoney());
    }
  }

  function handleResetProductsClick() {
    const currentProducts = state.products;
    if (isMachineAlreadyFull(currentProducts)) {
      dispatch(showPopup("Machine is already full of products!"));
    } else {
      dispatch(showPopup("All product slots are filled."));
      dispatch(resetMachine());
    }
  }

  function handleLogoutClick() {
    dispatch(logout());
  }

  return (
    <div className="supplier-dashboard bg-soft-gray rounded-small grid">
      Machine Balance = {state.machineBalance}
      <button
        className="rounded-small text-white"
        onClick={handleCollectMoneyClick}
      >
        Collect Money
      </button>
      <button
        className="rounded-small text-white"
        onClick={handleResetProductsClick}
      >
        Reset Products
      </button>
      <button className="rounded-small text-white" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
}

export default SupplierDashboard;
