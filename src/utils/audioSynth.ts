export const playSpeciesSound = (speciesName: string, setAudioStatus: (status: string) => void) => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (speciesName.includes('Falcon') || speciesName.includes('Hummingbird') || speciesName.includes('Tern')) {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.2);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
      setAudioStatus('playing: Airborne High-Frequency Pulse 🦅');
    } else if (speciesName.includes('Butterfly') || speciesName.includes('Locust') || speciesName.includes('Dragonfly')) {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.setValueAtTime(600, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
      setAudioStatus('playing: Insect Swarm Harmonic Pulse 🦋');
    } else if (speciesName.includes('Whale') || speciesName.includes('Shark') || speciesName.includes('Ray')) {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.6);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
      osc.start(now);
      osc.stop(now + 0.7);
      setAudioStatus('playing: Deep Oceanic Sonar Frequency 🐋');
    } else {
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(220, now + 0.4);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
      setAudioStatus('playing: Terrestrial Resonance Pulse 🐅');
    }
  } catch (e) {
    console.log('Audio playback error:', e);
  }
};
