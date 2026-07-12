import { describe, expect, it, vi } from "vitest";
import { getCatalanVoice, speakCatalan } from "@/lib/audio/speech";

describe("speech synthesis", () => {
  it("prefers ca-ES voices", () => {
    const voices = [
      { lang: "en-US", name: "English" },
      { lang: "ca-ES", name: "Catalan" }
    ] as SpeechSynthesisVoice[];
    expect(getCatalanVoice(voices)?.name).toBe("Catalan");
  });

  it("reports missing Catalan voices", () => {
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        getVoices: () => [],
        cancel: vi.fn(),
        speak: vi.fn()
      }
    });
    expect(speakCatalan("Bon dia").ok).toBe(false);
  });
});
