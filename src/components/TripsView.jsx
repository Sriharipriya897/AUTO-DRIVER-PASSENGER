import React from 'react';
import { History, CheckCircle2, MapPin, IndianRupee, Bell, ArrowRight } from 'lucide-react';
import { RECENT_ALERTS_LOG } from '../data/mockData';

export default function TripsView({ activeTab, onSwitchToDashboard }) {
  if (activeTab === 'alerts') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Relocation Alerts Log</h3>
          </div>
          <span className="text-xs bg-red-100 text-red-600 font-bold px-2.5 py-0.5 rounded-full">
            1 Unread Alert
          </span>
        </div>

        <div className="space-y-3">
          {RECENT_ALERTS_LOG.map((log) => (
            <div key={log.id} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span>{log.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal">• {log.time}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{log.detail}</p>
              </div>

              <button
                onClick={onSwitchToDashboard}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 shrink-0"
              >
                <span>View Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <History className="w-5 h-5 text-blue-600" />
            <span>Today's Completed Trips & Earnings</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Summary of rides completed in Coimbatore demand zones</p>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-500">Total Today</div>
          <div className="text-xl font-black text-slate-900">₹1,240</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-emerald-50/60 border border-emerald-100 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              #9
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Cross Cut Road → RS Puram DB Road</div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                <span>3.4 km</span>
                <span>•</span>
                <span>Completed 24 mins ago</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-black text-slate-900">₹145</div>
            <div className="text-[10px] text-emerald-700 font-semibold">+₹30 Surge</div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
              #8
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Gandhipuram Bus Stand → Railway Station</div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                <span>2.8 km</span>
                <span>•</span>
                <span>Completed 1 hr ago</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-black text-slate-900">₹110</div>
            <div className="text-[10px] text-slate-500">Standard fare</div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
              #7
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Ukkadam Stand → Town Hall</div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                <span>1.9 km</span>
                <span>•</span>
                <span>Completed 2 hrs ago</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-black text-slate-900">₹75</div>
            <div className="text-[10px] text-slate-500">Standard fare</div>
          </div>
        </div>
      </div>
    </div>
  );
}
