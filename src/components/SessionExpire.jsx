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
    <div className="session-expire">
      <p>Your session expires in </p>
      <div className="countdown">
        <p>{minutes} minutes</p>
      </div>
      <div className="countdown">
        <p>{seconds} seconds</p>
      </div>
    </div>
  );
};

export default SessionExpire;
