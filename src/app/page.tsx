'tsx'
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      {/* Header / Title Section */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-wider bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AMARIS: The Gaia Telemetry Network
        </h1>
        <p className="text-sm text-gray-400">
          Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator
        </p>
      </div>

      {/* 3D Viewport Placeholder */}
      <div className="my-auto flex flex-col items-center justify-center border border-gray-800 rounded-2xl p-12 bg-gray-900/40 backdrop-blur-md">
        <div className="animate-pulse text-cyan-400 text-lg font-medium mb-2">
          🌍 Initializing Global Telemetry Grid...
        </div>
        <p className="text-xs text-gray-500 text-center max-w-md">
          Airborne (Green), Insect (Purple), Oceanic (Cyan), and Terrestrial (Amber) tracks are loading. Click interactions and cinematic dive-in engine initializing.
        </p>
      </div>

      {/* Active Developer Footer */}
      <footer className="w-full py-4 px-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <div className="flex space-x-6 mb-2 md:mb-0">
          <a href="https://github.com/amarshaw87" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
        <div>
          Designed & Engineered by Amar | Powered by AMARIS & Gemini AI Agent Framework.
        </div>
      </footer>
    </main>
  );
}
