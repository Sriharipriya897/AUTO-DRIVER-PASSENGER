import React from 'react';
import { IndianRupee, Clock, Zap, Star, TrendingUp } from 'lucide-react';
import { DRIVER_PROFILE } from '../data/mockData';

export default function QuickStats({ relocationState }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Earnings Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-semibold">Today's Earnings</div>
          <div className="text-xl font-black text-slate-900 mt-1">{DRIVER_PROFILE.todayEarnings}</div>
          <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +₹380 from relocation
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <IndianRupee className="w-5 h-5" />
        </div>
      </div>

      {/* Idle Time Saved */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-semibold">Idle Stand Time Saved</div>
          <div className="text-xl font-black text-slate-900 mt-1">{DRIVER_PROFILE.idleTimeSaved}</div>
          <div className="text-[10px] text-blue-600 font-bold mt-1">
            Algorithm optimization
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      {/* Relocation Efficiency */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-semibold">Relocations Done</div>
          <div className="text-xl font-black text-slate-900 mt-1">
            {relocationState === 'completed' ? '3 Relocations' : '2 Relocations'}
          </div>
          <div className="text-[10px] text-purple-600 font-bold mt-1">
            High demand score
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
          <Zap className="w-5 h-5" />
        </div>
      </div>

      {/* Driver Rating */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-semibold">Driver Rating</div>
          <div className="text-xl font-black text-slate-900 mt-1 flex items-center gap-1">
            <span>{DRIVER_PROFILE.rating}</span>
            <span className="text-amber-400 text-sm">★</span>
          </div>
          <div className="text-[10px] text-slate-500 font-bold mt-1">
            Ukkadam Auto Stand
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
          <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
        </div>
      </div>

    </div>
  );
}
