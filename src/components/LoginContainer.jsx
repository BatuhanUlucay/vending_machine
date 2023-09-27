import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import { securityCheck } from "../util/security";
import { failLoginAttempt } from "../redux/actions";

function LoginContainer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [passwordInput, setPasswordInput] = useState("");

  function handleClickUserLoginClick() {
    dispatch(login("user"));
  }

  function handleSupplierLoginClick() {
    if (!securityCheck(passwordInput)) {
      dispatch(failLoginAttempt());
      if (state.remainingAttempt > 1) {
        alert("Invalid password!");
      } else {
        alert(
          "You entered invalid password for 3 times. Please contact security."
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
    <div className="login">
      <button onClick={handleClickUserLoginClick}>User Login</button>
      {state.remainingAttempt > 0 && (
        <>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            placeholder="Password"
          />
          <button onClick={handleSupplierLoginClick}>Supplier Login</button>
        </>
      )}
    </div>
  );
}

export default LoginContainer;