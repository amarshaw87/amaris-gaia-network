'use client';
import React from 'react';

export default function SpeciesModal({ selectedCategory, activeReaction, onSelectSpecies, onClose }: any) {
  if (!selectedCategory) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 z-50">
      <div className="bg-gray-950 border border-white/20 rounded-3xl p-5 max-w-sm w-full space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center border-b border-gray-800 pb-3">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl">{selectedCategory.icon}</span>
            <h2 className="font-bold text-base text-white">{selectedCategory.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-base px-2.5 py-1 rounded-lg bg-white/5 border border-white/10"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
          {selectedCategory.species.map((item: any, idx: number) => (
            <div 
              key={idx} 
              onClick={() => onSelectSpecies(item.name)}
              className={`bg-black/60 border p-3.5 rounded-2xl space-y-1.5 cursor-pointer transition-all ${activeReaction === item.name ? 'border-cyan-400 bg-cyan-950/30' : 'border-white/10 hover:border-white/30'}`}
            >
              <h4 className="text-xs font-bold text-cyan-300 flex items-center justify-between">
                <span>🐾 {item.name}</span>
                <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">Tap & Hear Sound 🔊</span>
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
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-xs font-extrabold text-black tracking-wider shadow-lg hover:opacity-90 transition-opacity"
        >
          CLOSE & RETURN TO SIMULATOR
        </button>
      </div>
    </div>
  );
}
