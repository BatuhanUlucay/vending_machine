import React, { useEffect } from "react";
import { Watch } from "react-loader-spinner";
import { useCountdown } from "../hooks/useCountdown";
import { useDispatch, useSelector } from "react-redux";
import { giveSelectedProduct, cancelRequest } from "../redux/actions";

function RobotArmSpinner({ targetDate }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [minutes, seconds] = useCountdown(targetDate);
  useEffect(() => {
    if (minutes + seconds <= 0) {
      dispatch(giveSelectedProduct());
      alert(`Here is your ${state.selectedProduct.name}. Enjoy!`);
    }
  }, [seconds, minutes]);

  function handleCancelRequestClick() {
    dispatch(cancelRequest());
  }

  return (
    <div>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <h4>Your drink is preparing...</h4>
      <button onClick={handleCancelRequestClick}>Cancel Request</button>
    </div>
  );
}

export default RobotArmSpinner;
