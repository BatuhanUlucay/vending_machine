import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import VendingMachine from "../../components/machine/VendingMachine";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { products } from "../../data/products";

const mockStore = configureStore([]);

describe("VendingMachine", () => {
  it("login component is rendered if isLoggedIn state is false", () => {
    const store = mockStore({
      machine: {
        robotArmSpinning: false,
        products: products,
      },
      login: {
        isLoggedIn: false,
      },
    });

    render(
      <Provider store={store}>
        <VendingMachine />
      </Provider>
    );

    expect(screen.getByTestId("login")).toBeInTheDocument();
  });

  it("robot arm spinner component is rendered if robotArmSpinning state is true", () => {
    const store = mockStore({
      machine: {
        robotArmSpinning: true,
      },
      login: {
        isLoggedIn: true,
      },
    });

    render(
      <Provider store={store}>
        <VendingMachine />
      </Provider>
    );

    expect(screen.getByTestId("robot-arm-spinner")).toBeInTheDocument();
  });

  it("supplier dashboard component is rendered if isLoggedIn is true and session is supplier.", () => {
    const store = mockStore({
      machine: {
        robotArmSpinning: false,
      },
      login: {
        isLoggedIn: true,
        session: "supplier",
      },
    });

    render(
      <Provider store={store}>
        <VendingMachine />
      </Provider>
    );

    expect(screen.getByTestId("supplier-dashboard")).toBeInTheDocument();
  });

  it("vending machine component is rendered if isLoggedIn is true and robotArmSpinning is false.", () => {
    const store = mockStore({
      machine: {
        robotArmSpinning: false,
        products: products,
      },
      login: {
        isLoggedIn: true,
        session: "user",
      },
    });

    render(
      <Provider store={store}>
        <VendingMachine />
      </Provider>
    );

    expect(screen.getByTestId("vending-machine")).toBeInTheDocument();
  });

  it("dispatches correct actions when give refund button clicked.", () => {
    const store = mockStore({
      machine: {
        robotArmSpinning: false,
        products: products,
      },
      login: {
        isLoggedIn: true,
      },
    });

    render(
      <Provider store={store}>
        <VendingMachine />
      </Provider>
    );

    const giveRefundButton = screen.getByTestId("give-refund");
    fireEvent.click(giveRefundButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("SHOW_POPUP");
    expect(actions).toContain("GIVE_REFUND");
    expect(actions).toContain("LOGOUT");
  });
});
