"use client";

import { useEffect } from "react";

function playChime() {
  try {
    const ctx = new AudioContext();
    // Classic MacBook startup chime: F#3, A3, C#4, F#4
    const notes = [185.0, 220.0, 277.2, 369.99];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.08;
      // Swell in then decay - classic Mac bell envelope
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.12, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
      osc.start(t);
      osc.stop(t + 1.2);
    });
  } catch {
    // AudioContext blocked or unavailable — silent fail
  }
}

export function ChimeEffect() {
  useEffect(() => {
    const handler = () => {
      playChime();
      document.removeEventListener("click", handler);
      document.removeEventListener("keydown", handler);
    };
    document.addEventListener("click", handler, { once: true });
    document.addEventListener("keydown", handler, { once: true });
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return null;
}
