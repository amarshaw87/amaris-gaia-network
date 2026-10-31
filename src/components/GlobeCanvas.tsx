'use client';
import React from 'react';

export default function GlobeCanvas() {
  return (
    <div className="w-full h-72 rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-black via-blue-950/50 to-black shadow-[0_0_40px_rgba(6,182,212,0.25)] relative flex items-center justify-center">
      <div className="relative w-44 h-44 rounded-full border-2 border-cyan-500/40 bg-gradient-to-tr from-blue-900 via-indigo-950 to-cyan-900 shadow-[inset_0_0_30px_rgba(6,182,212,0.5)] animate-spin-slow flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 border border-cyan-400/20 rounded-full scale-75"></div>
        <div className="absolute inset-0 border border-cyan-400/20 rounded-full scale-50"></div>
        <div className="absolute inset-0 border-t border-b border-cyan-400/30 w-full h-1/2 top-1/4"></div>
        <div className="absolute inset-0 border-l border-r border-cyan-400/30 w-1/2 h-full left-1/4"></div>
        <div className="w-6 h-6 bg-cyan-400 rounded-full blur-md opacity-80 animate-ping"></div>
      </div>
      <div className="absolute w-52 h-52 rounded-full border border-cyan-400/20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-center">
        <span className="text-[10px] font-mono tracking-widest text-cyan-300 bg-black/70 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
          🛰️ 3D SPINNING EARTH & MIGRATION RADAR ACTIVE
        </span>
      </div>
    </div>
  );
}
