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
    await user.click(screen.getByRole("button", { name: /First phrases/i }));
    expect(screen.getByText(/1 \/ 27/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /flip card to reveal meaning/i }));
    expect(screen.getAllByText("Meaning")[0]).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /flip card back to catalan/i }));
    expect(screen.getByRole("button", { name: /flip card to reveal meaning/i })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /flip card to reveal meaning/i }));
    await user.click(screen.getByRole("button", { name: /i knew it/i }));

    await user.click(screen.getByRole("button", { name: /flip card to reveal meaning/i }));
    await user.click(screen.getByRole("button", { name: /still learning/i }));
    await user.click(screen.getByRole("button", { name: /return to topics/i }));

    await user.click(screen.getByRole("button", { name: /Review 1/i }));
    expect(screen.getByText(/1 \/ 1/)).toBeInTheDocument();
  });
});
