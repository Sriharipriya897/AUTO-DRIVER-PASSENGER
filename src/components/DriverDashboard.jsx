import React, { useState } from 'react';
import QuickStats from './QuickStats';
import CoimbatoreMap from './CoimbatoreMap';
import RelocationAlertCard from './RelocationAlertCard';
import StoryFlow from './StoryFlow';
import TripsView from './TripsView';

export default function DriverDashboard({
  activeTab,
  setActiveTab,
  zones,
  selectedZoneId,
  onSelectZone,
  relocationState,
  onAcceptRelocation,
  onDeclineRelocation,
  onResetRelocation,
  onSwitchToPassengerView
}) {
  if (activeTab === 'alerts' || activeTab === 'trips') {
    return <TripsView activeTab={activeTab} onSwitchToDashboard={() => setActiveTab('dashboard')} />;
  }

  if (activeTab === 'how-it-works') {
    return <StoryFlow />;
  }

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>Good Evening, Driver</span>
            <span className="text-2xl animate-pulse">👋</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Ukkadam Auto Stand • Bajaj RE Green/Yellow (TN 37 CZ 4920)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSwitchToPassengerView}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3.5 py-2 rounded-xl text-xs transition-colors border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Test Passenger Request</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Quick Metrics */}
      <QuickStats relocationState={relocationState} />

      {/* HERO ELEMENT: Smart Relocation Alert Card */}
      <RelocationAlertCard
        relocationState={relocationState}
        onAccept={onAcceptRelocation}
        onDecline={onDeclineRelocation}
        onReset={onResetRelocation}
      />

      {/* Interactive Coimbatore Map */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Coimbatore Interactive Demand Map</h3>
            <p className="text-xs text-slate-500">
              Click any zone marker to view real-time demand-supply metrics.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="flex items-center gap-1 text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
              🔴 Gandhipuram (High)
            </span>
            <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
              🟢 Ukkadam (Your Stand)
            </span>
          </div>
        </div>

        <CoimbatoreMap
          zones={zones}
          selectedZoneId={selectedZoneId}
          onSelectZone={onSelectZone}
          relocationState={relocationState}
          onTriggerRelocation={onAcceptRelocation}
        />
      </div>

      {/* 7-Step Design Thinking Flow */}
      <StoryFlow />

    </div>
  );
}
