import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import { useDispatch } from "react-redux";
import { expireUserSession } from "../redux/actions";

const SessionExpire = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);
  const dispatch = useDispatch();

  if (minutes + seconds <= 0) {
    dispatch(expireUserSession());
  }
  return (
    <>
      <div>
        <p>{minutes} minutes</p>
      </div>
      <div>
        <p>{seconds} seconds</p>
      </div>
    </>
  );
};

export default SessionExpire;
