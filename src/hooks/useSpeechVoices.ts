"use client";

import { useEffect, useState } from "react";
import { inspectAudioSupport, type AudioSupport } from "@/lib/audio/speech";

export function useSpeechVoices() {
  const [support, setSupport] = useState<AudioSupport>({ supported: false, hasCatalanVoice: false });

  useEffect(() => {
    const update = () => setSupport(inspectAudioSupport());
    update();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.addEventListener("voiceschanged", update);
      return () => window.speechSynthesis.removeEventListener("voiceschanged", update);
    }
  }, []);

  return support;
}
