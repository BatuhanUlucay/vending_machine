import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SessionExpire from "../../components/machine/SessionExpire";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { useCountdown } from "../../hooks/useCountdown";

const mockStore = configureStore([]);

jest.mock("../../hooks/useCountdown", () => ({
  useCountdown: jest.fn(),
}));

describe("SessionExpire", () => {
  const store = mockStore({
    machine: {
      data: "Sample data",
    },
  });

  it("checks session expire component is rendered correctly", () => {
    useCountdown.mockImplementation(() => [0, 0]);

    render(
      <Provider store={store}>
        <SessionExpire />
      </Provider>
    );

    expect(screen.getByTestId("session-expire")).toHaveTextContent(
      "Your session expires"
    );
  });

  it("dispatched correct actions when countdown returns [0,0]", () => {
    useCountdown.mockImplementation(() => [0, 0]);

    render(
      <Provider store={store}>
        <SessionExpire />
      </Provider>
    );

    const actions = store.getActions().map((action) => {
      return action.type;
    });

    expect(actions).toContain("LIGHTS_OFF");
    expect(actions).toContain("EXPIRE_USER_SESSION");
  });
});
