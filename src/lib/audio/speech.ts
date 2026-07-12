export type AudioSupport = {
  supported: boolean;
  hasCatalanVoice: boolean;
  voiceName?: string;
};

export function getCatalanVoice(voices: SpeechSynthesisVoice[]) {
  return voices.find((voice) => voice.lang.toLowerCase() === "ca-es")
    ?? voices.find((voice) => voice.lang.toLowerCase().startsWith("ca"))
    ?? null;
}

export function inspectAudioSupport(): AudioSupport {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return { supported: false, hasCatalanVoice: false };
  }
  const voice = getCatalanVoice(window.speechSynthesis.getVoices());
  return { supported: true, hasCatalanVoice: Boolean(voice), voiceName: voice?.name };
}

export function speakCatalan(text: string, rate = 0.92) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return { ok: false, reason: "Speech synthesis is not available in this browser." };
  }
  const voice = getCatalanVoice(window.speechSynthesis.getVoices());
  if (!voice) return { ok: false, reason: "No Catalan voice is installed on this device." };
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voice.lang;
  utterance.voice = voice;
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
  return { ok: true };
}
