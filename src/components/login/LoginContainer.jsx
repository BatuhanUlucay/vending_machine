import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, showPopup, lightsOn } from "../../redux/actions";
import { securityCheck } from "../../util/security";
import { failLoginAttempt } from "../../redux/actions";

function LoginContainer() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const [passwordInput, setPasswordInput] = useState("");

  function handleClickUserLoginClick() {
    dispatch(login("user"));
    dispatch(lightsOn());
  }

  function handleSupplierLoginClick() {
    // Checks for 3 failed login try. Disables supplier login for scam protection.
    if (!securityCheck(passwordInput)) {
      dispatch(failLoginAttempt());
      if (loginState.remainingAttempt > 1) {
        dispatch(showPopup("Invalid password!"));
      } else {
        dispatch(
          showPopup(
            "You entered invalid password for 3 times. Please contact security."
          )
        );
      }
    } else {
      dispatch(login("supplier"));
      dispatch(lightsOn());
    }
  }

  function handlePasswordChange(event) {
    setPasswordInput(event.target.value);
  }

  return (
    <div className="login-container bg-soft-gray rounded-small">
      <button
        className="rounded-small text-white"
        onClick={handleClickUserLoginClick}
      >
        User Login
      </button>
      {loginState.remainingAttempt > 0 && (
        <>
          <input
            className="password-field rounded-small"
            type="password"
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            placeholder="Password"
          />
          <button
            className="rounded-small text-white"
            onClick={handleSupplierLoginClick}
          >
            Supplier Login
          </button>
        </>
      )}
    </div>
  );
}

export default LoginContainer;
