'use client';
import React, { useState } from 'react';

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  const tracks = [
    {
      id: 'airborne',
      name: 'Airborne Matrix',
      icon: '🦅',
      color: 'border-green-500 text-green-400 bg-green-950/30',
      desc: 'Neon-Green trails (Peregrine Falcon, Hummingbird).'
    },
    {
      id: 'insect',
      name: 'Insect Grid',
      icon: '🦋',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30',
      desc: 'Neon-Purple trails (Monarch Butterfly, Desert Locust).'
    },
    {
      id: 'oceanic',
      name: 'Oceanic Grid',
      icon: '🐋',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30',
      desc: 'Cyan/Neon-Blue trails (Blue Whale, Great White Shark).'
    },
    {
      id: 'terrestrial',
      name: 'Terrestrial Network',
      icon: '🐅',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30',
      desc: 'Amber/Neon-Orange vectors (Elephant, Wildebeest, Wolf).'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-4">
      {/* Header */}
      <div className="text-center space-y-2 my-2">
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: Gaia Telemetry
        </h1>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          Global Wildlife 3D Ecosystem Simulator & Telemetry Network.
        </p>
      </div>

      {/* Tracks Container */}
      <div className="space-y-3 my-4 max-w-md mx-auto w-full">
        {tracks.map((t) => (
          <div
            key={t.id}
            onClick={() => setActiveTrack(t.name)}
            className={`p-4 rounded-xl border ${t.color} backdrop-blur-md cursor-pointer transition-transform active:scale-95 shadow-lg`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{t.icon}</span>
              <div>
                <h3 className="font-bold text-sm">{t.name}</h3>
                <p className="text-[11px] text-gray-300 mt-0.5">{t.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Trigger Alert */}
      {activeTrack && (
        <div className="text-center text-[11px] text-cyan-300 animate-pulse bg-cyan-950/40 py-2 px-3 rounded-lg border border-cyan-500/30 max-w-md mx-auto w-full">
          ⚡ Cinematic Dive Triggered: <span className="font-bold underline">{activeTrack}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full max-w-md mx-auto py-3 px-4 border border-white/10 rounded-xl bg-white/5 text-[10px] text-gray-400 text-center space-y-2">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/amarshaw87" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
        </div>
        <div>
          Designed & Engineered by Amar | Powered by AMARIS & Gemini AI.
        </div>
      </footer>
    </main>
  );
}
