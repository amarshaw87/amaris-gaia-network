'use client';
import React, { useEffect, useState } from 'react';
import { fetchLiveTelemetryStream, LiveTelemetryAnimal } from '../services/telemetryApi';

export default function LiveAnimalMap() {
  const [animals, setAnimals] = useState<LiveTelemetryAnimal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<LiveTelemetryAnimal | null>(null);

  useEffect(() => {
    // Initial fetch of the 10,000+ node data stream
    fetchLiveTelemetryStream().then((data) => setAnimals(data));

    // Live telemetry pulse interval simulating real-time migration shifts
    const interval = setInterval(() => {
      setAnimals((prev) =>
        prev.map((animal) => ({
          ...animal,
          lat: parseFloat((animal.lat + (Math.random() - 0.5) * 0.5).toFixed(4)),
          lng: parseFloat((animal.lng + (Math.random() - 0.5) * 0.5).toFixed(4)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-3 p-4 rounded-3xl border border-cyan-500/30 bg-black/80 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] relative overflow-hidden">
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
        <div>
          <h3 className="text-xs font-black tracking-widest text-cyan-400 uppercase">
            🛰️ Live Migration Radar Matrix
          </h3>
          <p className="text-[10px] text-gray-400 font-mono">
            Tracking 10,000+ Active Nodes in Real-Time
          </p>
        </div>
        <span className="text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-full animate-pulse">
          ● STREAM LIVE
        </span>
      </div>

      {/* Interactive Radar viewport simulating moving nodes */}
      <div className="relative h-64 rounded-2xl bg-gradient-to-b from-blue-950/40 via-black to-indigo-950/40 border border-white/15 overflow-hidden flex items-center justify-center">
        {/* Radar concentric circles */}
        <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-90"></div>
        <div className="absolute inset-0 border border-cyan-500/15 rounded-full scale-60"></div>
        <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-30"></div>
        <div className="absolute w-full h-[1px] bg-cyan-500/20"></div>
        <div className="absolute h-full w-[1px] bg-cyan-500/20"></div>

        {/* Dynamic Moving Animal Nodes */}
        <div className="absolute inset-0 p-3 overflow-hidden">
          {animals.slice(0, 25).map((animal, i) => {
            // Random scattering across radar box for live movement visual
            const topPos = `${(i * 13) % 85 + 5}%`;
            const leftPos = `${(i * 23) % 85 + 5}%`;

            return (
              <div
                key={animal.id}
                onClick={() => setSelectedAnimal(animal)}
                style={{ top: topPos, left: leftPos }}
                className="absolute cursor-pointer group transition-all duration-700 animate-bounce"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] flex items-center justify-center hover:scale-150 transition-transform">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                {/* Tooltip on hover/click */}
                <div className="absolute hidden group-hover:block bottom-4 left-1/2 -translate-x-1/2 z-30 bg-black/90 border border-cyan-500/50 p-2 rounded-xl text-[9px] font-mono text-white whitespace-nowrap shadow-xl">
                  <p className="font-bold text-cyan-300">{animal.name}</p>
                  <p>Velocity: {animal.velocity}</p>
                  <p>Coords: {animal.lat}, {animal.lng}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-2 text-center pointer-events-none">
          <p className="text-[9px] font-mono text-cyan-300/80 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/20">
            Click any active blip to inspect live telemetry coordinates
          </p>
        </div>
      </div>

      {/* Selected Animal Inspection Box */}
      {selectedAnimal && (
        <div className="mt-3 p-3 bg-cyan-950/30 border border-cyan-500/40 rounded-2xl text-[10px] font-mono text-gray-300">
          <div className="flex justify-between items-center text-cyan-400 font-bold mb-1">
            <span>TARGET LOCKED: {selectedAnimal.name}</span>
            <button onClick={() => setSelectedAnimal(null)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <p>Category: <span className="text-white uppercase">{selectedAnimal.category}</span></p>
          <p>Velocity: <span className="text-emerald-300">{selectedAnimal.velocity}</span></p>
          <p>GPS Vector: <span className="text-purple-300">{selectedAnimal.lat}° N, {selectedAnimal.lng}° E</span></p>
        </div>
      )}
    </div>
  );
}
