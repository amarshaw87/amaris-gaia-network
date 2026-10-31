'use client';
import React, { useState } from 'react';
import { telemetryData } from '../data/telemetryData';
import { playSpeciesSound } from '../utils/audioSynth';
import SpeciesModal from '../components/SpeciesModal';
import ParticleBackground from '../components/ParticleBackground';
import GlobeCanvas from '../components/GlobeCanvas';
import LiveAnimalMap from '../components/LiveAnimalMap';

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
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-9
