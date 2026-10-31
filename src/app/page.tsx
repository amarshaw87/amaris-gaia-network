'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const tracks = [
    {
      id: 'airborne',
      name: 'Airborne Matrix',
      icon: '🦅',
      border: 'border-green-500/40 hover:border-green-400 bg-green-950/20',
      text: 'text-green-400',
      desc: 'Neon-Green trails (Peregrine Falcon, Bar-headed Goose, Hummingbird).'
    },
    {
      id: 'insect',
      name: 'Insect Grid',
      icon: '🦋',
      border: 'border-purple-500/40 hover:border-purple-400 bg-purple-950/20',
      text: 'text-purple-400',
      desc: 'Neon-Purple trails (Monarch Butterfly, Desert Locust Swarm).'
    },
    {
      id: 'oceanic',
      name: 'Oceanic Grid',
      icon: '🐋',
      border: 'border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/20',
      text: 'text-cyan-400',
      desc: 'Cyan/Neon-Blue trails (Blue Whale, Great White Shark, Manta Ray).'
    },
    {
      id: 'terrestrial',
      name: 'Terrestrial Network',
      icon: '🐅',
      border: 'border-amber-500/40 hover:border-amber-400 bg-amber-950/20',
      text: 'text-amber-400',
      desc: 'Amber/Neon-Orange vectors (African Elephant, Wildebeest, Gray Wolf).'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-4 md:p-12">
      {/* Header Section */}
      <div className="text-center space-y-2 pt-4">
        <h1 className="text-2xl md:text-5xl font-extrabold tracking-wider bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: The Gaia Telemetry
        </h1>
        <p className="text-xs md:text-base text-gray-400 max-w-xl mx-auto px-2">
          Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator with Real-Time Telemetry Tracking.
        </p>
      </div>

      {/* Interactive 4 Dynamic Tracks Grid */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto w-full px-2">
        {tracks.map((track) => (
          <div
            key={track.id}
            onClick={() => setSelectedTrack(track.name)}
            className={`p-4 md:p-5 rounded-2xl border backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg ${track.border}`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">{track.icon}</span>
              <h3 className={`text-base md:text-lg font-bold ${track.text}`}>{track.name}</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">{track.desc}</p>
          </div>
        ))}
      </div>

      {/* Selected Action Status */}
      {selectedTrack && (
        <div className="text-center mb-4 animate-pulse text-xs text-cyan-300 px-4">
          ⚡ Initializing Cinematic Dive-In Workflow for: <span className="font-bold underline">{selectedTrack}</span>
        </div>
      )}

      {/* Active Developer Footer */}
      <footer className="w-full max-w-4xl mx-auto py-3 px-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2 mb-2">
        <div className="flex space-x-4">
          <a href="https://github.com/amarshaw87" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
        <div className="text-center sm:text-right">
          Designed & Engineered by Amar | Powered by AMARIS & Gemini AI.
        </div>
      </footer>
    </main>
  );
}
