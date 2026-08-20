import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DriverDashboard from './components/DriverDashboard';
import PassengerView from './components/PassengerView';
import { INITIAL_ZONES } from './data/mockData';

export default function App() {
  const [activeView, setActiveView] = useState('driver'); // 'driver' | 'passenger'
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'map' | 'alerts' | 'trips' | 'how-it-works'
  const [zones, setZones] = useState(INITIAL_ZONES);
  const [selectedZoneId, setSelectedZoneId] = useState('gandhipuram');
  const [relocationState, setRelocationState] = useState('idle'); // 'idle' | 'navigating' | 'completed'

  // Handle Driver Accepting Relocation
  const handleAcceptRelocation = () => {
    setRelocationState('navigating');
    setSelectedZoneId('gandhipuram');

    // Simulate arrival after timer
    setTimeout(() => {
      setRelocationState('completed');
      
      // Dynamically update Gandhipuram zone status from High to Balanced!
      setZones((prevZones) =>
        prevZones.map((z) => {
          if (z.id === 'gandhipuram') {
            return {
              ...z,
              autos: 15,
              status: 'balanced',
              desc: 'Relocation complete. 11 additional autos arrived from Ukkadam.'
            };
          }
          return z;
        })
      );
    }, 6000);
  };

  const handleDeclineRelocation = () => {
    setRelocationState('idle');
  };

  const handleResetRelocation = () => {
    setRelocationState('idle');
    setZones(INITIAL_ZONES);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900 font-sans">
      
      {/* Top Header Navigation */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        unreadAlertsCount={relocationState === 'idle' ? 1 : 0}
      />

      {/* Main Content Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            if (tab === 'map') {
              setActiveTab('dashboard'); // map view is embedded in dashboard
            }
          }}
          activeView={activeView}
        />

        {/* View Main Content Area */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {activeView === 'driver' ? (
            <DriverDashboard
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              zones={zones}
              selectedZoneId={selectedZoneId}
              onSelectZone={setSelectedZoneId}
              relocationState={relocationState}
              onAcceptRelocation={handleAcceptRelocation}
              onDeclineRelocation={handleDeclineRelocation}
              onResetRelocation={handleResetRelocation}
              onSwitchToPassengerView={() => setActiveView('passenger')}
            />
          ) : (
            <PassengerView
              onTriggerDriverAlert={() => {
                setActiveView('driver');
                setActiveTab('dashboard');
                handleResetRelocation();
              }}
            />
          )}
        </main>

      </div>

      {/* Footer Meta Bar */}
      <footer className="bg-white border-t border-slate-200 py-3 px-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>AutoFlow Prototype — Smart Demand–Supply Relocation System</span>
        </div>
        <div className="text-[11px] text-slate-400">
          Coimbatore College Design Thinking Presentation Prototype • Frontend-Only Simulation
        </div>
      </footer>

    </div>
  );
}
