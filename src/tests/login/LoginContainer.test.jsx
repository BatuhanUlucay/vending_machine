import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import LoginContainer from "../../components/login/LoginContainer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { securityCheck } from "../../util/security";

const mockStore = configureStore([]);

jest.mock("../../util/security", () => ({
  securityCheck: jest.fn(),
}));

describe("LoginContainer", () => {
  const store = mockStore({
    login: {
      isLoggedIn: false,
      remainingAttempt: 3,
      session: null,
    },
  });
  it("dispatches correct actions when user login button clicked.", () => {
    render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );

    const userLoginButton = screen.getByTestId("user-login-button");
    fireEvent.click(userLoginButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("LOGIN");
    expect(actions).toContain("LIGHTS_ON");
  });

  it("dispatches correct actions when supplier login button clicked.", () => {
    render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );

    const supplierLoginButton = screen.getByTestId("supplier-login-button");
    fireEvent.click(supplierLoginButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("LOGIN");
    expect(actions).toContain("LIGHTS_ON");
  });

  it("dispatches correct actions when 3 invalid login try.", () => {
    render(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );

    const supplierLoginButton = screen.getByTestId("supplier-login-button");
    fireEvent.click(supplierLoginButton);
    securityCheck.mockImplementation(() => 2);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("FAIL_LOGIN_ATTEMPT");
    expect(actions).toContain("SHOW_POPUP");
  });
});
