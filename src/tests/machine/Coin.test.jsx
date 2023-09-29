import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Coin from "../../components/machine/Coin";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("Coin", () => {
  const store = mockStore({
    machine: {
      data: "Mocked data",
    },
  });
  it("renders with given unit", () => {
    render(
      <Provider store={store}>
        <Coin unit={1} />
      </Provider>
    );

    expect(screen.getByTestId("coin")).toHaveTextContent("1");
  });
});
