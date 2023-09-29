import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import SupplierDashboard from "../../components/dashboard/SupplierDashboard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { isMachineAlreadyFull } from "../../util/machineUtils";

const mockStore = configureStore([]);

jest.mock("../../util/machineUtils", () => ({
  isMachineAlreadyFull: jest.fn(),
}));

isMachineAlreadyFull.mockImplementation(() => true);

describe("SupplierDashboard", () => {
  const store = mockStore({
    machine: {
      data: "Mocked data",
    },
  });
  it("dispatches correct actions when collect money button clicked.", () => {
    render(
      <Provider store={store}>
        <SupplierDashboard />
      </Provider>
    );

    const collectMoneyButton = screen.getByTestId("collect-money");
    fireEvent.click(collectMoneyButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("SHOW_POPUP");
    expect(actions).toContain("COLLECT_MONEY");
  });

  it("dispatches correct actions when reset products button clicked.", () => {
    const store = mockStore({
      machine: {
        data: "Mock data",
      },
    });

    render(
      <Provider store={store}>
        <SupplierDashboard />
      </Provider>
    );

    const resetProductsButton = screen.getByTestId("reset-products");
    fireEvent.click(resetProductsButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("SHOW_POPUP");
    expect(actions).toContain("RESET_MACHINE");
  });

  it("dispatches correct actions when logout button clicked.", () => {
    const store = mockStore({
      machine: {
        data: "Mock data",
      },
    });

    render(
      <Provider store={store}>
        <SupplierDashboard />
      </Provider>
    );

    const logoutButton = screen.getByTestId("logout");
    fireEvent.click(logoutButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });
    expect(actions).toContain("LOGOUT");
    expect(actions).toContain("LIGHTS_OFF");
  });
});
