import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MoneyInsert from "../../components/machine/MoneyInsert";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("MoneyInsert", () => {
  const store = mockStore({
    machine: {
      data: "Mocked data",
    },
  });
  it("check if component is rendered correctly", () => {
    render(
      <Provider store={store}>
        <MoneyInsert />
      </Provider>
    );

    expect(screen.getByTestId("money-insert")).toBeInTheDocument();
  });
});
