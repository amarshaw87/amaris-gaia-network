'use client';
import React, { useState } from 'react';
import { telemetryData } from '../data/telemetryData';
import { playSpeciesSound } from '../utils/audioSynth';
import SpeciesModal from '../components/SpeciesModal';
import ParticleBackground from '../components/ParticleBackground';
import GlobeCanvas from '../components/GlobeCanvas';

export default function GaiaTelemetry() {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [activeReaction, setActiveReaction] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioStatus, setAudioStatus] = useState<string>('Audio Engine Ready 🔊');

  const handleSpeciesClick = (speciesName: string) => {
    setActiveReaction(speciesName);
    playSpeciesSound(speciesName, isMuted, setAudioStatus);
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col justify-between p-4 selection:bg-cyan-500 selection:text-black overflow-hidden">
      {/* Live Particle & Starfield Background */}
      <ParticleBackground />

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Header */}
        <header className="text-center space-y-2 my-3">
          <div className="flex justify-between items-center max-w-md mx-auto px-1">
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 py-1 px-2.5 rounded-full">
              {audioStatus}
            </span>
            <button
              onClick={() => {
                setIsMuted(!isMuted);
                setAudioStatus(!isMuted ? 'Audio Muted 🔇' : 'Audio Enabled 🔊');
              }}
              className={`text-xs px-3 py-1 rounded-full font-mono border transition-all ${
                isMuted 
                  ? 'bg-red-950/40 border-red-500/40 text-red-400' 
                  : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400'
              }`}
            >
              {isMuted ? '🔇 UNMUTE' : '🔊 MUTE'}
            </button>
          </div>

          <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
            AMARIS: Gaia Telemetry
          </h1>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator & Audio Telemetry.
          </p>
        </header>

        {/* 3D Spinning Earth Globe Component */}
        <div className="w-full max-w-md mx-auto my-2">
          <GlobeCanvas />
        </div>

        {/* Telemetry Tracks Grid */}
        <section className="space-y-3.5

