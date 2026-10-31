export const playSpeciesSound = (speciesName: string, isMuted: boolean, setAudioStatus: (status: string) => void) => {
  if (isMuted) {
    setAudioStatus('Audio Muted 🔇');
    return;
  }

  setAudioStatus(`Playing Sound: ${speciesName} 🎵`);

  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Unique frequency tones based on species
    if (speciesName.includes('Tern') || speciesName.includes('Falcon') || speciesName.includes('Goose')) {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High pitch for birds
    } else if (speciesName.includes('Butterfly') || speciesName.includes('Dragonfly') || speciesName.includes('Locust')) {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // Mid-high flutter
    } else if (speciesName.includes('Whale') || speciesName.includes('Shark') || speciesName.includes('Turtle')) {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime); // Deep oceanic frequency
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, audioCtx.currentTime); // Terrestrial tone
    }

    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 1.2);
  } catch (e) {
    console.log('Audio context not supported or blocked', e);
  }
};
