'use client';
import React from 'react';
import { TelemetryTrack, Species } from '../data/telemetryData';

interface SpeciesModalProps {
  selectedCategory: TelemetryTrack | null;
  activeReaction: string | null;
  onSelectSpecies: (speciesName: string) => void;
  onClose: () => void;
}

export default function SpeciesModal({
  selectedCategory,
  activeReaction,
  onSelectSpecies,
  onClose,
}: SpeciesModalProps) {
  if (!selectedCategory) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className={`w-full max-w-lg p-6 rounded-3xl border-2 ${selectedCategory.theme} bg-black/95 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative flex flex-col max-h-[85vh]`}>
        
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <span className="text-3xl p-2 bg-black/60 rounded-2xl border border-white/10">
              {selectedCategory.icon}
            </span>
            <div>
              <h2 className="text-lg font-black tracking-wider text-white">
                {selectedCategory.title}
              </h2>
              <p className="text-[11px] text-gray-400 font-mono">
                TELEMETRY & ACOUSTIC SENSOR FEED
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-xs font-mono transition-all border border-white/10"
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Species List */}
        <div className="overflow-y-auto space-y-4 my-4 pr-1">
          {selectedCategory.speciesList.map((species: Species, index: number) => {
            const isActive = activeReaction === species.name;
            return (
              <div
                key={index}
                onClick={() => onSelectSpecies(species.name)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.01]'
                    : 'border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-extrabold text-white flex items-center space-x-2">
                      <span>{species.name}</span>
                      <span className="text-[10px] font-mono italic text-cyan-300 font-normal">
                        ({species.scientificName})
                      </span>
                    </h3>
                    <p className="text-[11px] text-gray-300 mt-1 font-mono">
                      📍 {species.route}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-black/50 border border-white/10 rounded-lg font-mono text-emerald-400">
                    Active 🛰️
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] font-mono text-gray-400">
                  <div className="bg-black/40 p-2 rounded-xl border border-white/5">
                    <span className="text-gray-500 block">DISTANCE:</span>
                    <span className="text-cyan-200 font-bold">{species.distance}</span>
                  </div>
                  <div className="bg-black/40 p-2 rounded-xl border border-white/5">
                    <span className="text-gray-500 block">VELOCITY:</span>
                    <span className="text-emerald-200 font-bold">{species.velocity}</span>
                  </div>
                </div>

                <div className="mt-2 text-[10px] font-mono text-gray-400 bg-black/40 p-2 rounded-xl border border-white/5">
                  <span className="text-gray-500 block">GPS COORDINATES:</span>
                  <span className="text-purple-300 font-bold">{species.coordinates}</span>
                </div>

                <p className="text-[11px] text-gray-300 mt-3 leading-relaxed">
                  {species.description}
                </p>

                {isActive && (
                  <div className="mt-3 text-center py-1.5 bg-cyan-500/20 border border-cyan-500/40 rounded-xl text-[10px] font-mono text-cyan-300 animate-pulse">
                    🔊 XENO-CANTO AUDIO & ACOUSTIC PULSE ACTIVE
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-white/10 text-center">
          <p className="text-[10px] font-mono text-gray-400">
            Click any organism card to trigger audio telemetry simulation.
          </p>
        </div>

      </div>
    </div>
  );
}
