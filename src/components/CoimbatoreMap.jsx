import React, { useState } from 'react';
import { MapPin, Navigation, Compass, AlertCircle, Info, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoimbatoreMap({ zones, selectedZoneId, onSelectZone, relocationState, onTriggerRelocation }) {
  const [hoveredZone, setHoveredZone] = useState(null);

  // SVG route path between Ukkadam (320, 390) and Gandhipuram (430, 190)
  // Curve control point at (350, 280)
  const relocationPathD = "M 320 390 Q 350 280 430 190";

  return (
    <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg min-h-[440px] flex flex-col justify-between">
      
      {/* Map Header Overlay */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
        <div className="bg-slate-950/80 backdrop-blur-md text-white border border-slate-700/80 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md">
          <Compass className="w-4 h-4 text-blue-400 animate-spin-slow" />
          <span>Coimbatore Live Demand Grid</span>
        </div>

        {relocationState === 'navigating' && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg animate-pulse"
          >
            <Navigation className="w-3.5 h-3.5 transform rotate-45" />
            <span>Relocating: Ukkadam → Gandhipuram</span>
          </motion.div>
        )}

        {relocationState === 'completed' && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg"
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Relocation Completed ✓ (Gandhipuram Balanced)</span>
          </motion.div>
        )}
      </div>

      {/* Map Legend (Top Right) */}
      <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-200 text-[11px] p-2.5 rounded-xl space-y-1.5 shadow-md">
        <div className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Zone Status</div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500"></span>
          <span>High Demand (Needs Autos)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500"></span>
          <span>Moderate Demand</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500"></span>
          <span>Balanced / Idle Stand</span>
        </div>
      </div>

      {/* SVG Canvas Map */}
      <div className="relative w-full h-[450px] bg-[#0b1329] overflow-hidden select-none">
        <svg className="w-full h-full" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Grid Pattern */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.8" opacity="0.6" />
            </pattern>
            {/* Gradient for Lakes */}
            <linearGradient id="lakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <rect width="800" height="480" fill="url(#grid)" />

          {/* Water Bodies (Coimbatore Lakes) */}
          {/* Ukkadam Periyakulam */}
          <path d="M 280 400 Q 300 370 330 400 T 310 430 Z" fill="url(#lakeGrad)" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
          <text x="290" y="415" fill="#38bdf8" fontSize="9" opacity="0.6" fontWeight="bold">Ukkadam Lake</text>

          {/* Valankulam */}
          <path d="M 370 340 Q 400 320 420 350 T 390 370 Z" fill="url(#lakeGrad)" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
          <text x="380" y="352" fill="#38bdf8" fontSize="9" opacity="0.6" fontWeight="bold">Valankulam</text>

          {/* Singanallur Lake */}
          <path d="M 580 380 Q 620 360 640 400 T 600 420 Z" fill="url(#lakeGrad)" stroke="#0284c7" strokeWidth="1" opacity="0.7" />
          <text x="590" y="398" fill="#38bdf8" fontSize="9" opacity="0.6" fontWeight="bold">Singanallur Lake</text>

          {/* Main Highway & Arterial Roads */}
          {/* Avinashi Road: Gandhipuram to Peelamedu */}
          <path d="M 430 190 L 600 170 L 720 150" fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          <path d="M 430 190 L 600 170 L 720 150" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="6 4" />
          <text x="520" y="170" fill="#94a3b8" fontSize="9" transform="rotate(-6 520 170)">Avinashi Road</text>

          {/* Trichy Road: Ukkadam to Singanallur */}
          <path d="M 320 390 L 440 370 L 570 360" fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <text x="440" y="385" fill="#94a3b8" fontSize="9" transform="rotate(-5 440 385)">Trichy Road</text>

          {/* Mettupalayam Road: Gandhipuram to Saravanampatti */}
          <path d="M 430 190 L 500 80" fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />

          {/* DB Road: RS Puram connect */}
          <path d="M 240 240 L 320 390" fill="none" stroke="#334155" strokeWidth="4" />
          <path d="M 240 240 L 430 190" fill="none" stroke="#334155" strokeWidth="4" />

          {/* Animated Relocation Route Line */}
          {(relocationState === 'navigating' || relocationState === 'completed') && (
            <>
              {/* Outer Glowing Route Path */}
              <path
                d={relocationPathD}
                fill="none"
                stroke="#2563eb"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.3"
              />
              {/* Inner Animated Dashed Route Path */}
              <path
                d={relocationPathD}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-dash"
              />

              {/* Animated Auto Rickshaw moving along route */}
              {relocationState === 'navigating' && (
                <g>
                  <animateMotion
                    path={relocationPathD}
                    dur="5s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                  {/* Custom Auto Rickshaw Vector */}
                  <g transform="translate(-16, -16)">
                    <circle cx="16" cy="16" r="15" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                    <text x="16" y="21" fontSize="14" textAnchor="middle" fill="#ffffff">🛺</text>
                  </g>
                </g>
              )}
            </>
          )}

          {/* Interactive Zone Markers */}
          {zones.map((zone) => {
            const isSelected = selectedZoneId === zone.id;
            const isHovered = hoveredZone === zone.id;

            let colorHex = '#10b981'; // green
            let ringColor = 'rgba(16, 185, 129, 0.4)';
            if (zone.status === 'high') {
              colorHex = '#ef4444'; // red
              ringColor = 'rgba(239, 68, 68, 0.6)';
            } else if (zone.status === 'moderate') {
              colorHex = '#f97316'; // orange
              ringColor = 'rgba(249, 115, 22, 0.5)';
            }

            return (
              <g
                key={zone.id}
                transform={`translate(${zone.x}, ${zone.y})`}
                onClick={() => onSelectZone(zone.id)}
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                className="cursor-pointer"
              >
                {/* High Demand Pulsing Outer Aura */}
                {zone.status === 'high' && (
                  <circle
                    r="32"
                    fill="none"
                    stroke={colorHex}
                    strokeWidth="2"
                    className="animate-pulse-ring"
                  />
                )}

                {/* Zone Marker Circle */}
                <circle
                  r={isSelected ? 18 : 14}
                  fill={colorHex}
                  stroke="#ffffff"
                  strokeWidth="3"
                  className="transition-all duration-300 shadow-md"
                />

                {/* Auto Rickshaw Icon inside Marker */}
                <text x="0" y="4" fontSize={isSelected ? "14" : "11"} textAnchor="middle" fill="#ffffff" pointerEvents="none">
                  🛺
                </text>

                {/* Zone Name Badge */}
                <g transform="translate(0, 28)">
                  <rect
                    x="-50"
                    y="-10"
                    width="100"
                    height="20"
                    rx="10"
                    fill={isSelected ? '#1e293b' : '#0f172a'}
                    stroke={isSelected ? '#3b82f6' : '#334155'}
                    strokeWidth="1.5"
                  />
                  <text
                    x="0"
                    y="3"
                    fontSize="10"
                    fontWeight="bold"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    {zone.name}
                  </text>
                </g>

                {/* Live Requests / Autos Tag */}
                <g transform="translate(0, -22)">
                  <rect
                    x="-42"
                    y="-9"
                    width="84"
                    height="18"
                    rx="9"
                    fill="#020617"
                    stroke={colorHex}
                    strokeWidth="1"
                    opacity="0.9"
                  />
                  <text
                    x="0"
                    y="3"
                    fontSize="9"
                    fontWeight="bold"
                    fill={colorHex}
                    textAnchor="middle"
                  >
                    {zone.requests} req • {zone.autos} autos
                  </text>
                </g>

                {/* Driver Current Location Indicator Badge */}
                {zone.isDriverCurrent && (
                  <g transform="translate(0, -44)">
                    <rect x="-48" y="-10" width="96" height="20" rx="10" fill="#2563eb" />
                    <text x="0" y="3" fontSize="9" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                      📍 Your Stand
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Selected Zone Quick Info Footer Banner */}
        {selectedZoneId && (
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 text-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xl">
            {(() => {
              const active = zones.find(z => z.id === selectedZoneId) || zones[0];
              return (
                <>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      active.status === 'high' ? 'bg-red-500 animate-ping' :
                      active.status === 'moderate' ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{active.name}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          active.status === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          active.status === 'moderate' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {active.status.toUpperCase()} DEMAND
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{active.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <div className="text-right border-r border-slate-800 pr-4">
                      <div className="text-slate-400">Demand Mismatch</div>
                      <div className="font-bold text-white text-sm">
                        {active.requests} reqs : {active.autos} autos
                      </div>
                    </div>

                    {active.status === 'high' && relocationState === 'idle' && (
                      <button
                        onClick={onTriggerRelocation}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-lg transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap text-xs"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        Start Relocation (12 min)
                      </button>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>

    </div>
  );
}
