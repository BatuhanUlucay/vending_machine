import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Component from "../../components/dashboard/Component";

describe("Component", () => {
  it("renders with given logo and name", () => {
    const component = {
      logo: "Logo",
      name: "Name",
      status: 1,
    };

    render(<Component component={component} />);

    expect(screen.getByTestId("component-div")).toHaveTextContent("Logo");
    expect(screen.getByTestId("component-div")).toHaveTextContent("Name");
  });

  it("renders with a green background when status is 1", () => {
    const component = {
      logo: "Logo",
      name: "Name",
      status: 1,
    };

    render(<Component component={component} />);

    expect(screen.getByTestId("component-div")).toHaveStyle({
      backgroundColor: "green",
    });
  });

  it("renders with a red background when status is 0", () => {
    const component = {
      logo: "Logo",
      name: "Name",
      status: 0,
    };

    render(<Component component={component} />);

    expect(screen.getByTestId("component-div")).toHaveStyle({
      backgroundColor: "red",
    });
  });
});
