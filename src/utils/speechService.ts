let lastSpoken = "";

export function speak(text: string, isEmergency = false): void {
  if (!window.speechSynthesis) return;
  if (text === lastSpoken) return;

  window.speechSynthesis.cancel();
  lastSpoken = text;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = isEmergency ? 1.6 : 1.3;
  utterance.pitch = 1.0;
  utterance.lang = "en-IN";

  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => v.name.includes("Google UK English Female")) || voices[0];
  if (preferred) utterance.voice = preferred;

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  window.speechSynthesis?.cancel();
  lastSpoken = "";
}
