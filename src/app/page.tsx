
'use client';
import React, { useState } from 'react';

export default function GaiaTelemetry() {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [activeReaction, setActiveReaction] = useState<string | null>(null);

  const telemetryData = [
    {
      id: 'airborne',
      title: 'Airborne Matrix',
      subtitle: 'Neon-Green trails',
      icon: '🦅',
      theme: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300',
      species: [
        {
          name: 'Peregrine Falcon & Amur Falcon',
          normal: 'Normal Loop: Aerodynamic jet-like dive position, slicing through wind currents.',
          reaction: 'Click Reaction: Sudden air-roll, wings stretched wide, unleashing a fierce hunting screech.'
        },
        {
          name: 'Ruby-throated Hummingbird',
          normal: 'Normal Loop: High-speed wing motion creating a fixed hovering vector.',
          reaction: 'Click Reaction: Instant sharp pivot to a new direction with high-frequency buzzing sound.'
        },
        {
          name: 'Arctic Tern & Siberian Crane',
          normal: 'Normal Loop: Long-distance migratory glide across global atmospheric layers.',
          reaction: 'Click Reaction: Synchronized flock formation shift with high-altitude calls.'
        }
      ]
    },
    {
      id: 'insect',
      title: 'Insect Grid',
      subtitle: 'Neon-Purple trails (Tiny Travelers)',
      icon: '🦋',
      theme: 'border-purple-500/50 bg-purple-950/40 text-purple-400',
      badgeBg: 'bg-purple-500/20 text-purple-300',
      species: [
        {
          name: 'Monarch Butterfly & Painted Lady',
          normal: 'Normal Loop: Soft, natural flutter with colorful wings riding atmospheric drafts.',
          reaction: 'Click Reaction: Sharp upward u-turn loop accompanied by soft fluttering/rustling whisper tones.'
        },
        {
          name: 'Desert Locust (Swarm Mode)',
          normal: 'Normal Loop: Aggressive mass collective march across regional terrain vectors.',
          reaction: 'Click Reaction: Grid expansion across screen bounds with a massive crunchy swarm audio wave.'
        },
        {
          name: 'Globe Skimmer Dragonfly',
          normal: 'Normal Loop: High-precision hovering and erratic tactical interception sweeps.',
          reaction: 'Click Reaction: Lightning-fast darting motion with crisp wing-snap audio.'
        }
      ]
    },
    {
      id: 'oceanic',
      title: 'Oceanic Grid',
      subtitle: 'Cyan/Neon-Blue trails (Marine Life)',
      icon: '🐋',
      theme: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-400',
      badgeBg: 'bg-cyan-500/20 text-cyan-300',
      species: [
        {
          name: 'Blue Whale & Humpback Whale',
          normal: 'Normal Loop: Majestic slow tail sweeps through deep sapphire underwater currents.',
          reaction: 'Click Reaction: Blowhole mist spray ejection, powerful tail slap, and deep ocean whale song echo.'
        },
        {
          name: 'Great White & Tiger Shark',
          normal: 'Normal Loop: Silent, unblinking lateral glide slicing through marine pressure.',
          reaction: 'Click Reaction: Jaw expansion revealing razor teeth, high-speed surge, and muffled water-gush sound.'
        },
        {
          name: 'Manta Ray',
          normal: 'Normal Loop: Graceful underwater flight with broad flat side-fins gliding smoothly.',
          reaction: 'Click Reaction: Expansive wave-form fin sweep accompanied by a deep-water pulse sound.'
        }
      ]
    },
    {
      id: 'terrestrial',
      title: 'Terrestrial Network',
      subtitle: 'Amber/Neon-Orange vectors (Land Safari)',
      icon: '🐅',
      theme: 'border-amber-500/50 bg-amber-950/40 text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300',
      species: [
        {
          name: 'African Bush Elephant',
          normal: 'Normal Loop: Heavy seismic footfalls with rhythmic ear-flapping motions.',
          reaction: 'Click Reaction: Trunk raised high, tactical step back, and resounding trumpet chinghad sound.'
        },
        {
          name: 'Blue Wildebeest & Plains Zebra',
          normal: 'Normal Loop: Steady gallop and running animation in continuous migration tracks.',
          reaction: 'Click Reaction: Hoof ground-strike, alert posture snap, grunting snort or high braying bark.'
        },
        {
          name: 'Gray Wolf',
          normal: 'Normal Loop: Low-profile stealth pacing tracking ground scent vectors.',
          reaction: 'Click Reaction: Freeze stance, head locked upward toward the sky, and chilling pack howl.'
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-4 selection:bg-cyan-500 selection:text-black">
      {/* Header */}
      <header className="text-center space-y-1.5 my-3">
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: Gaia Telemetry
        </h1>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator & Telemetry Network.
        </p>
      </header>

      {/* 3D Global Space Viewport Banner */}
      <div className="relative w-full max-w-md mx-auto h-36 my-2 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-blue-950/50 to-black overflow-hidden flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80"></div>
        <div className="relative z-10 text-center space-y-1">
          <div className="text-3xl animate-pulse">🌍</div>
          <div className="text-[11px] font-mono tracking-widest text-cyan-300">GLOBAL ECOSYSTEM ORBIT ACTIVE</div>
          <div className="text-[9px] font-mono text-gray-400">Synchronizing 4 Telemetry Grids</div>
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

      {/* Interactive Species Details & Simulation Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 z-50">
          <div className="bg-gray-950 border border-white/20 rounded-3xl p-5 max-w-sm w-full space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl">{selectedCategory.icon}</span>
                <h2 className="font-bold text-base text-white">{selectedCategory.title}</h2>
              </div>
              <button 
                onClick={() => { setSelectedCategory(null); setActiveReaction(null); }}
                className="text-gray-400 hover:text-white text-base px-2.5 py-1 rounded-lg bg-white/5 border border-white/10"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {selectedCategory.species.map((item: any, idx: number) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveReaction(item.name)}
                  className={`bg-black/60 border p-3.5 rounded-2xl space-y-1.5 cursor-pointer transition-all ${activeReaction === item.name ? 'border-cyan-400 bg-cyan-950/30' : 'border-white/10 hover:border-white/30'}`}
                >
                  <h4 className="text-xs font-bold text-cyan-300 flex items-center justify-between">
                    <span>🐾 {item.name}</span>
                    <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-gray-300">Tap to Trigger</span>
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">{item.normal}</p>
                  {activeReaction === item.name && (
                    <div className="mt-2 p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-[11px] text-cyan-200 animate-pulse">
                      ⚡ {item.reaction}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => { setSelectedCategory(null); setActiveReaction(null); }}
              className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-xs font-extrabold text-black tracking-wider shadow-lg hover:opacity-90 transition-opacity"
            >
              CLOSE & RETURN TO SIMULATOR
            </button>
          </div>
        </div>
      )}

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
