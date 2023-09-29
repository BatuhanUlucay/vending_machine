import Product from "./Product";
import MoneyInsert from "./MoneyInsert";
import { useSelector, useDispatch } from "react-redux";
import LoginContainer from "../login/LoginContainer";
import SessionExpire from "./SessionExpire";
import { giveRefund, logout, showPopup } from "../../redux/actions";
import RobotArmSpinner from "./RobotArmSpinner";
import SupplierDashboard from "../dashboard/SupplierDashboard";

function VendingMachine() {
  const machineState = useSelector((state) => state.machine);
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const FIVE_MINS_IN_MS = 5 * 60 * 1000;
  const TEN_SECS_IN_MS = 10 * 1000;
  const dateTimeAfterFiveMins = new Date().getTime() + FIVE_MINS_IN_MS;
  const dateTimeAfterTenSecs = new Date().getTime() + TEN_SECS_IN_MS;

  function handleGiveRefundClick() {
    dispatch(
      showPopup(
        `${
          machineState.userBalance > 0
            ? `Money given back as refund: ${machineState.userBalance}  ₺.`
            : ""
        } Have a nice day!`
      )
    );

    dispatch(giveRefund());
    dispatch(logout());
  }

  if (!loginState.isLoggedIn) {
    return <LoginContainer />;
  }

  if (machineState.robotArmSpinning) {
    return <RobotArmSpinner targetDate={dateTimeAfterTenSecs} />;
  }

  if (loginState.session === "supplier") {
    return <SupplierDashboard />;
  } else {
    return (
      <div
        className="vending-machine bg-soft-gray rounded-small"
        data-testid="vending-machine"
      >
        <SessionExpire targetDate={dateTimeAfterFiveMins} />
        {machineState.products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        <MoneyInsert />
        <h2>Your Balance: {machineState.userBalance} ₺</h2>
        <button
          className="btn-negative rounded-small text-white"
          onClick={handleGiveRefundClick}
          data-testid="give-refund"
        >
          Give Refund & Logout
        </button>
      </div>
    );
  }
}

export default VendingMachine;
