import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { useDispatch } from "react-redux";
import { expireUserSession } from "../../redux/actions";
import PropTypes from "prop-types";

const SessionExpire = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);
  const dispatch = useDispatch();

  // If there is no user activity for 5 mins, expires the session.
  if (minutes + seconds <= 0) {
    dispatch(expireUserSession());
  }

  // Displays a countdown on vending machine
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

SessionExpire.propTypes = {
  component: PropTypes.instanceOf(Date),
};
