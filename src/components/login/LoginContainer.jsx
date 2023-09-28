import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, showPopup } from "../../redux/actions";
import { securityCheck } from "../../util/security";
import { failLoginAttempt } from "../../redux/actions";

function LoginContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [passwordInput, setPasswordInput] = useState("");

  function handleClickUserLoginClick() {
    dispatch(login("user"));
  }

  function handleSupplierLoginClick() {
    // Checks for 3 failed login try. Disables supplier login for scam protection.
    if (!securityCheck(passwordInput)) {
      dispatch(failLoginAttempt());
      if (state.remainingAttempt > 1) {
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
      {state.remainingAttempt > 0 && (
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
