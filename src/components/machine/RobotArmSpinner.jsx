/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Watch } from "react-loader-spinner";
import { useCountdown } from "../../hooks/useCountdown";
import { useDispatch, useSelector } from "react-redux";
import {
  giveSelectedProduct,
  cancelRequest,
  showPopup,
} from "../../redux/actions";
import PropTypes from "prop-types";

function RobotArmSpinner({ targetDate }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [minutes, seconds] = useCountdown(targetDate);
  useEffect(() => {
    if (minutes + seconds <= 0) {
      dispatch(giveSelectedProduct());
      dispatch(showPopup(`Here is your ${state.selectedProduct.name}. Enjoy!`));
    }
  }, [seconds, minutes]);

  function handleCancelRequestClick() {
    dispatch(cancelRequest());
  }

  return (
    <div className="robot-arm-spinner bg-soft-gray rounded-small grid">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{ margin: "auto" }}
        wrapperClassName=""
        visible={true}
      />
      <h4>Your drink is preparing...</h4>
      <button
        className="btn-negative rounded-small text-white"
        onClick={handleCancelRequestClick}
      >
        Cancel Request
      </button>
    </div>
  );
}

export default RobotArmSpinner;

RobotArmSpinner.propTypes = {
  component: PropTypes.instanceOf(Date),
};
