
'use client';
import React, { useState } from 'react';
import { telemetryData } from '../data/telemetryData';
import { playSpeciesSound } from '../utils/audioSynth';
import SpeciesModal from '../components/SpeciesModal';
import ParticleBackground from '../components/ParticleBackground';
import GlobeCanvas from '../components/GlobeCanvas';
import LiveAnimalMap from '../components/LiveAnimalMap';

export default function GaiaTelemetry() {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [activeReaction, setActiveReaction] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioStatus, setAudioStatus] = useState<string>('Audio Engine Ready 🔊');

  const handleSpeciesClick = (speciesName: string) => {
    setActiveReaction(speciesName);
    playSpeciesSound(speciesName, isMuted, setAudioStatus);
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col justify-between p-4 selection:bg-cyan-500 selection:text-black overflow-hidden">
      {/* Live Particle & Starfield Background */}
      <ParticleBackground />

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Header */}
        <header className="text-center space-y-2 my-3">
          <div className="flex justify-between items-center max-w-md mx-auto px-1">
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 py-1 px-2.5 rounded-full">
              {audioStatus}
            </span>
            <button
              onClick={() => {
                setIsMuted(!isMuted);
                setAudioStatus(!isMuted ? 'Audio Muted 🔇' : 'Audio Enabled 🔊');
              }}
              className={`text-xs px-3 py-1 rounded-full font-mono border transition-all ${
                isMuted 
                  ? 'bg-red-950/40 border-red-500/40 text-red-400' 
                  : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400'
              }`}
            >
              {isMuted ? '🔇 UNMUTE' : '🔊 MUTE'}
            </button>
          </div>

          <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
            AMARIS: Gaia Telemetry
          </h1>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator & Audio Telemetry.
          </p>
        </header>

        {/* 3D Spinning Earth Globe & Live Migration Radar Map */}
        <div className="w-full max-w-md mx-auto my-2 space-y-3">
          <GlobeCanvas />
          <LiveAnimalMap />
        </div>

        {/* Telemetry Tracks Grid */}
        <section className="space-y-3.5 my-2 max-w-md mx-auto w-full">
          {telemetryData.map((track) => (
            <div
              key={track.id}
              onClick={() => setSelectedCategory(track)}
              className={`p-4 rounded-2xl border-2 ${track.theme} backdrop-blur-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-2xl`}
            >
              <div className="flex items-center space-x-3.5">
                <span className="text-3xl p-2 bg-black/50 rounded-xl border border-white/10">{track.icon}</span>
                <div>
                  <h3 className="font-extrabold text-sm text-white tracking-wide">{track.title}</h3>
                  <p className="text-[11px] text-gray-300 mt-0.5 leading-relaxed">{track.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Modular Species Modal Component */}
        <SpeciesModal 
          selectedCategory={selectedCategory}
          activeReaction={activeReaction}
          onSelectSpecies={handleSpeciesClick}
          onClose={() => { setSelectedCategory(null); setActiveReaction(null); }}
        />

        {/* Footer Branding Section */}
        <footer className="w-full max-w-md mx-auto py-3 px-4 border border-white/10 rounded-2xl bg-white/5 text-[10px] text-gray-400 text-center space-y-2 mt-4">
          <div className="flex justify-center space-x-4 font-medium">
            <a href="https://github.com/amarshaw87" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <div className="text-gray-300 font-semibold">
            Designed & Engineered by Amar | Powered by AMARIS & Gemini AI Agent Framework.
          </div>
        </footer>
      </div>
    </main>
  );
}
