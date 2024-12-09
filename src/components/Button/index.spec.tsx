import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from ".";

describe("Button", () => {
  it("should not render a button with wrong buttonLabel", () => {
    render(<Button buttonLabel="Cadastrar produto" />);
    const button = screen.queryByText("Cadastrar oferta");
    expect(button).not.toBeInTheDocument();
  });
  it("button must be disabled at loading", () => {
    render(<Button buttonLabel="Cadastrar produto" isLoading={true} />);
    const button = screen.getByTestId("button-component");
    expect(button).toBeDisabled();
  });
});
