import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import RobotArmSpinner from "../../components/machine/RobotArmSpinner";
import { fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("RobotArmSpinner", () => {
  const store = mockStore({
    machine: {
      data: "Sample data",
    },
  });

  it("renders robot arm spinner correctly.", () => {
    render(
      <Provider store={store}>
        <RobotArmSpinner />
      </Provider>
    );

    expect(screen.getByTestId("robot-arm-spinner")).toBeInTheDocument();
    expect(screen.getByTestId("robot-arm-spinner")).toHaveTextContent(
      "Your drink is preparing..."
    );
  });
  it("dispatches correct actions when cancel request button is clicked.", () => {
    render(
      <Provider store={store}>
        <RobotArmSpinner />
      </Provider>
    );

    const cancelRequestButton = screen.getByTestId("cancel-request");
    fireEvent.click(cancelRequestButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });

    expect(actions).toContain("CANCEL_REQUEST");
  });
});
