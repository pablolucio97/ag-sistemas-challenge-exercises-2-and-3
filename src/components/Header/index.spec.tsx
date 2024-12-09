import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from ".";

describe("Header", () => {
  it("should display the Header component", () => {
    render(<Header pageTitle="Cadastrar produto" />);
    const header = screen.getByTestId("header-component");
    expect(header).toBeDefined();
  });
});
