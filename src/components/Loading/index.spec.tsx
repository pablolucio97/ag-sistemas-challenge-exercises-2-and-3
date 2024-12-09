import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from ".";

describe("Loading", () => {
  it("should render specific animation text indicator at loading when text is not hidden", () => {
    render(<Loading text="Carregando produtos..." hideText={false} />);
    const loading = screen.getByText("Carregando produtos...");
    expect(loading).toBeInTheDocument();
  });
  it("should not render default animation text indicator at loading when text is hidden", () => {
    render(<Loading hideText={true} />);
    const loading = screen.queryByText("Carregando dados...");
    expect(loading).not.toBeInTheDocument();
  });
});
