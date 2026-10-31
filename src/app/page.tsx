
'use client';
import React, { useState } from 'react';

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<any | null>(null);

  const tracks = [
    {
      id: 'airborne',
      name: 'Airborne Matrix',
      icon: '🦅',
      color: 'border-green-500 text-green-400 bg-green-950/30',
      desc: 'Neon-Green trails (Peregrine Falcon, Hummingbird).',
      species: [
        { name: 'Peregrine Falcon', action: 'Normal Dive: Jet-like dive position | Click: Sudden air-roll & fierce hunting screech.' },
        { name: 'Ruby-throated Hummingbird', action: 'Normal: High-speed hovering | Click: Instant sharp turn & high-frequency buzzing.' }
      ]
    },
    {
      id: 'insect',
      name: 'Insect Grid',
      icon: '🦋',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30',
      desc: 'Neon-Purple trails (Monarch Butterfly, Desert Locust).',
      species: [
        { name: 'Monarch Butterfly', action: 'Normal: Soft fluttering | Click: U-turn loop & rustling whisper tone.' },
        { name: 'Desert Locust (Swarm)', action: 'Normal: Aggressive swarm march | Click: Screen expansion & crunchy swarm noise.' }
      ]
    },
    {
      id: 'oceanic',
      name: 'Oceanic Grid',
      icon: '🐋',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30',
      desc: 'Cyan/Neon-Blue trails (Blue Whale, Great White Shark).',
      species: [
        { name: 'Blue Whale & Humpback', action: 'Normal: Majestic tail swim | Click: Blowhole mist splash & deep ocean whale songs.' },
        { name: 'Great White Shark', action: 'Normal: Silent left-right tail sweep | Click: Jaw open, fast swish & water-gush sound.' }
      ]
    },
    {
      id: 'terrestrial',
      name: 'Terrestrial Network',
      icon: '🐅',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30',
      desc: 'Amber/Neon-Orange vectors (Elephant, Wildebeest, Wolf).',
      species: [
        { name: 'African Bush Elephant', action: 'Normal: Heavy footsteps & ear flapping | Click: Trunk raise & loud trumpet sound.' },
        { name: 'Gray Wolf', action: 'Normal: Stealth ground sniffing | Click: Head raised up & chilling wolf howl.' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-4">
      {/* Header */}
      <div className="text-center space-y-1 my-2">
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: Gaia Telemetry
        </h1>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          Global Wildlife 3D Ecosystem Simulator & Telemetry Network.
        </p>
      </div>

      {/* Tracks Container */}
      <div className="space-y-3 my-3 max-w-md mx-auto w-full">
        {tracks.map((t) => (
          <div
            key={t.id}
            onClick={() => setSelectedTrack(t)}
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

      {/* Interactive Species Modal / Drawer */}
      {selectedTrack && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-white/20 rounded-2xl p-5 max-w-sm w-full space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{selectedTrack.icon}</span>
                <h2 className="font-bold text-base text-white">{selectedTrack.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedTrack(null)}
                className="text-gray-400 hover:text-white text-lg px-2 py-1"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {selectedTrack.species.map((s: any, idx: number) => (
                <div key={idx} className="bg-black/40 border border-white/10 p-3 rounded-xl space-y-1">
                  <h4 className="text-xs font-semibold text-cyan-300">🐾 {s.name}</h4>
                  <p className="text-[11px] text-gray-300">{s.action}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedTrack(null)}
              className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-xs font-bold text-black tracking-wide shadow-lg hover:opacity-90 transition-opacity"
            >
              Close & Return to Simulator
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full max-w-md mx-auto py-3 px-4 border border-white/10 rounded-xl bg-white/5 text-[10px] text-gray-400 text-center space-y-1.5">
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
