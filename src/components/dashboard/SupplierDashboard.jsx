import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectMoney, resetMachine, showPopup } from "../../redux/actions";
import { logout, lightsOff } from "../../redux/actions";
import { isMachineAlreadyFull } from "../../util/machineUtils";

function SupplierDashboard() {
  const dispatch = useDispatch();
  const machineState = useSelector((state) => state.machine);

  function handleCollectMoneyClick() {
    // Checks if machine has money in it.
    if (machineState.machineBalance <= 0) {
      dispatch(showPopup("There is no money in the machine right now."));
    } else {
      dispatch(
        showPopup(
          `Here is your ${machineState.machineBalance}  ₺. Have a nice day!`
        )
      );
      dispatch(collectMoney());
    }
  }

  function handleResetProductsClick() {
    const currentProducts = machineState.products;
    // Checks whether machine is already full.
    if (isMachineAlreadyFull(currentProducts)) {
      dispatch(showPopup("Machine is already full of products!"));
    } else {
      dispatch(showPopup("All product slots are filled."));
      dispatch(resetMachine());
    }
  }

  function handleLogoutClick() {
    dispatch(logout());
    dispatch(lightsOff());
  }

  return (
    <div className="supplier-dashboard bg-soft-gray rounded-small grid">
      Machine Balance = {machineState.machineBalance}
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
