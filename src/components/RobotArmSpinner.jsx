import React, { useEffect } from "react";
import { Watch } from "react-loader-spinner";
import { useCountdown } from "../hooks/useCountdown";
import { useDispatch } from "react-redux";
import { giveSelectedProduct, cancelRequest } from "../redux/actions";

function RobotArmSpinner({ targetDate }) {
  const dispatch = useDispatch();
  const [minutes, seconds] = useCountdown(targetDate);
  useEffect(() => {
    if (minutes + seconds <= 0) {
      dispatch(giveSelectedProduct());
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
