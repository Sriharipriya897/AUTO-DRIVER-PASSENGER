import React from 'react';
import { Navigation, Bell, User, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function Header({ activeView, setActiveView, unreadAlertsCount }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Subtitle */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Navigation className="w-6 h-6 transform rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">AutoFlow</h1>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Coimbatore Edition
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Smart Demand–Supply Relocation Assistant</p>
          </div>
        </div>

        {/* Center Toggle Switcher: Driver View | Passenger View */}
        <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200 shadow-inner">
          <button
            onClick={() => setActiveView('driver')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
              activeView === 'driver'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span className="text-base">🛺</span>
            <span>Driver View</span>
          </button>

          <button
            onClick={() => setActiveView('passenger')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
              activeView === 'passenger'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span className="text-base">👤</span>
            <span>Passenger View</span>
          </button>
        </div>

        {/* Right Info Pill */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Zone: <strong>Coimbatore Urban</strong></span>
          </div>

          <div className="relative">
            <button className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors">
              <Bell className="w-4 h-4" />
              {unreadAlertsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {unreadAlertsCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs">
              M
            </div>
            <div className="hidden xl:block text-left">
              <div className="text-xs font-bold text-slate-800">Murugan K.</div>
              <div className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                Active Idle Stand
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
