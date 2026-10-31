'use client';
import React, { useState } from 'react';
import { telemetryData } from '@/data/telemetryData';
import { playSpeciesSound } from '@/utils/audioSynth';
import SpeciesModal from '@/components/SpeciesModal';

export default function GaiaTelemetry() {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [activeReaction, setActiveReaction] = useState<string | null>(null);
  const [audioStatus, setAudioStatus] = useState<string>('Audio Engine Ready 🔊');

  const handleSpeciesClick = (speciesName: string) => {
    setActiveReaction(speciesName);
    playSpeciesSound(speciesName, setAudioStatus);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-4 selection:bg-cyan-500 selection:text-black">
      {/* Header */}
      <header className="text-center space-y-1.5 my-3">
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: Gaia Telemetry
        </h1>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator & Audio Telemetry.
        </p>
        <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 py-0.5 px-2 rounded-full inline-block mt-1">
          {audioStatus}
        </div>
      </header>

      {/* 3D Global Space Viewport Banner */}
      <div className="relative w-full max-w-md mx-auto h-32 my-2 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-blue-950/50 to-black overflow-hidden flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80"></div>
        <div className="relative z-10 text-center space-y-1">
          <div className="text-2xl animate-pulse">🌍</div>
          <div className="text-[10px] font-mono tracking-widest text-cyan-300">MODULAR ECOSYSTEM ORBIT ACTIVE</div>
        </div>
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
      <footer className="w-full max-w-md mx-auto py-3 px-4 border border-white/10 rounded-2xl bg-white/5 text-[10px] text-gray-400 text-center space-y-2">
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
    </main>
  );
}

