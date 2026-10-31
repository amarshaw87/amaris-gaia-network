'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const tracks = [
    {
      id: 'airborne',
      name: 'Airborne Matrix',
      icon: '🦅',
      border: 'border-green-500/30 hover:border-green-400',
      text: 'text-green-400',
      desc: 'Neon-Green trails (Peregrine Falcon, Bar-headed Goose, Hummingbird).'
    },
    {
      id: 'insect',
      name: 'Insect Grid',
      icon: '🦋',
      border: 'border-purple-500/30 hover:border-purple-400',
      text: 'text-purple-400',
      desc: 'Neon-Purple trails (Monarch Butterfly, Desert Locust Swarm).'
    },
    {
      id: 'oceanic',
      name: 'Oceanic Grid',
      icon: '🐋',
      border: 'border-cyan-500/30 hover:border-cyan-400',
      text: 'text-cyan-400',
      desc: 'Cyan/Neon-Blue trails (Blue Whale, Great White Shark, Manta Ray).'
    },
    {
      id: 'terrestrial',
      name: 'Terrestrial Network',
      icon: '🐅',
      border: 'border-amber-500/30 hover:border-amber-400',
      text: 'text-amber-400',
      desc: 'Amber/Neon-Orange vectors (African Elephant, Wildebeest, Gray Wolf).'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-6 md:p-12">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: The Gaia Telemetry Network
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
          Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator with Real-Time Telemetry Tracking.
        </p>
      </div>

      {/* Interactive 4 Dynamic Tracks Grid */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {tracks.map((track) => (
          <div
            key={track.id}
            onClick={() => setSelectedTrack(track.name)}
            className={`p-5 rounded-2xl border bg-gray-900/60 backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.02] ${track.border}`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">{track.icon}</span>
              <h3 className={`text-lg font-bold ${track.text}`}>{track.name}</h3>
            </div>
            <p className="text-xs text-gray-400">{track.desc}</p>
          </div>
        ))}
      </div>

      {/* Selected Action Status */}
      {selectedTrack && (
        <div className="text-center mb-6 animate-pulse text-xs text-cyan-300">
          ⚡ Initializing Cinematic Dive-In Workflow for: <span className="font-bold underline">{selectedTrack}</span>
        </div>
      )}

      {/* Active Developer Footer */}
      <footer className="w-full max-w-5xl mx-auto py-4 px-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <div className="flex space-x-6">
          <a href="https://github.com/amarshaw87" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
        <div className="text-center md:text-right">
          Designed & Engineered by Amar | Powered by AMARIS & Gemini AI Agent Framework.
        </div>
      </footer>
    </main>
  );
}
