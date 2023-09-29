import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import Product from "../../components/machine/Product";
import { fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { components } from "../../data/components";
import { products } from "../../data/products";

const mockStore = configureStore([]);

describe("Product", () => {
  const store = mockStore({
    machine: {
      components: components,
      userBalance: 100,
      products: products,
    },
  });
  it("renders given product correctly.", () => {
    render(
      <Provider store={store}>
        <Product product={products[0]} />
      </Provider>
    );

    expect(screen.getByTestId("product")).toBeInTheDocument();
    expect(screen.getByTestId("product")).toHaveTextContent(products[0].name);
    expect(screen.getByTestId("product")).toHaveTextContent(products[0].price);
    expect(screen.getByTestId("product")).toHaveTextContent(
      products[0].quantity
    );
  });

  it("dispatches correct actions when selectItem button is clicked.", () => {
    render(
      <Provider store={store}>
        <Product product={products[0]} />
      </Provider>
    );

    const selectItemButton = screen.getByTestId("select-item-button");
    fireEvent.click(selectItemButton);

    const actions = store.getActions().map((action) => {
      return action.type;
    });

    expect(actions).toContain("SELECT_PRODUCT");
  });
});
