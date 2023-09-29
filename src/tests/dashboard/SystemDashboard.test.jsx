import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import SystemDashboard from "../../components/dashboard/SystemDashboard";
import configureStore from "redux-mock-store";
import {
  shouldTriggerHeaterOrCooler,
  getCurrentEnergyConsumption,
} from "../../util/machineUtils";
import { components } from "../../data/components";

const mockStore = configureStore([]);

jest.mock("../../util/machineUtils", () => ({
  shouldTriggerHeaterOrCooler: jest.fn(),
  getCurrentEnergyConsumption: jest.fn(),
}));

shouldTriggerHeaterOrCooler.mockImplementation(() => true);

describe("SystemDashboard", () => {
  it("renders correct energy consumption.", () => {
    const store = mockStore({
      machine: {
        components: components,
      },
    });

    getCurrentEnergyConsumption.mockImplementation(() => 2);

    render(
      <Provider store={store}>
        <SystemDashboard />
      </Provider>
    );

    expect(screen.getByTestId("energy-consumption-div")).toBeInTheDocument();
    expect(screen.getByTestId("energy-consumption-div")).toHaveTextContent("2");
  });
});
