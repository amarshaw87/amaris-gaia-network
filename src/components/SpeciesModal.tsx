'use client';
import React from 'react';
import { TelemetryTrack, Species } from '@/data/telemetryData';
import { playSpeciesSound } from '@/utils/audioSynth';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`w-full max-w-lg p-6 rounded-3xl border-2 ${selectedCategory.theme} bg-black/90 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative overflow-hidden flex flex-col max-h-[85vh]`}>
        
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

        {/* Species List Scrollable Feed */}
        <div className="overflow-y-auto space-y-4 my-4 pr-1 scrollbar-thin scrollbar-thumb-cyan-500/20">
          {selectedCategory.speciesList.map((species: Species, index: number) => {
            const isActive = activeReaction === species.name;
            return (
              <div
                key={index}
                onClick={() => onSelectSpecies(species.
