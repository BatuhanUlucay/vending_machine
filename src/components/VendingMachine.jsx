import Product from "./Product";
import MoneyInsert from "./MoneyInsert";
import { useSelector, useDispatch } from "react-redux";
import LoginContainer from "./LoginContainer";
import SessionExpire from "./SessionExpire";
import { giveRefund, showPopup } from "../redux/actions";
import RobotArmSpinner from "./RobotArmSpinner";
import SupplierDashboard from "./SupplierDashboard";

function VendingMachine() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const FIVE_MINS_IN_MS = 5 * 60 * 1000;
  const TEN_SECS_IN_MS = 10 * 1000;
  const dateTimeAfterFiveMins = new Date().getTime() + FIVE_MINS_IN_MS;
  const dateTimeAfterTenSecs = new Date().getTime() + TEN_SECS_IN_MS;

  function handleGiveRefundClick() {
    dispatch(
      showPopup(
        `${
          state.userBalance > 0
            ? `Money given back as refund: ${state.userBalance}  ₺.`
            : ""
        } Have a nice day!`
      )
    );

    dispatch(giveRefund());
  }

  if (!state.isLoggedIn) {
    return <LoginContainer />;
  }

  if (state.robotArmSpinning) {
    return <RobotArmSpinner targetDate={dateTimeAfterTenSecs} />;
  }

  if (state.session === "supplier") {
    return <SupplierDashboard />;
  } else {
    return (
      <div className="vending-machine">
        <SessionExpire targetDate={dateTimeAfterFiveMins} />
        {state.products.map((product) => (
          <Product product={product} />
        ))}
        <MoneyInsert />
        <h2>Your Balance: {state.userBalance} ₺</h2>
        <button className="btn-refund" onClick={handleGiveRefundClick}>
          Give Refund & Logout
        </button>
      </div>
    );
  }
}

export default VendingMachine;
