import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { EnCatalaApp } from "@/components/EnCatalaApp";

describe("EnCatalaApp", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("opens a topic, reveals a flashcard, marks known, marks learning, and reviews missed", async () => {
    const user = userEvent.setup();
    render(<EnCatalaApp />);

    expect(screen.getByRole("heading", { name: /learn the catalan/i })).toBeInTheDocument();
    await user.click(screen.getAllByRole("button", { name: "Start" })[0]);
    expect(screen.getByText(/1 \/ 27/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /reveal meaning/i }));
    expect(screen.getByText("Meaning")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /i knew it/i }));

    await user.click(screen.getByRole("button", { name: /reveal meaning/i }));
    await user.click(screen.getByRole("button", { name: /still learning/i }));
    await user.click(screen.getByRole("button", { name: /return to topics/i }));

    expect(screen.getByText(/1 known · 1 still learning/)).toBeInTheDocument();
    await user.click(screen.getAllByRole("button", { name: /review missed/i })[0]);
    expect(screen.getByText(/1 \/ 1/)).toBeInTheDocument();
  });
});
