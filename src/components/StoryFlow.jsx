import React from 'react';
import { UserCheck, Radio, Scale, BellRing, CheckCircle2, Navigation, Sparkles, ArrowRight } from 'lucide-react';
import { STORY_STEPS } from '../data/mockData';

const iconMap = {
  UserCheck: UserCheck,
  Radio: Radio,
  Scale: Scale,
  BellRing: BellRing,
  CheckCircle2: CheckCircle2,
  Navigation: Navigation,
  Sparkles: Sparkles,
};

export default function StoryFlow() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
              Design Thinking Core Solution
            </span>
            <h3 className="text-lg font-bold text-slate-900">How AutoFlow Works</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            End-to-end 7-step dynamic demand–supply relocation methodology for Coimbatore.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-semibold flex items-center gap-1">
          <span>Concept Presentation Flow</span>
        </div>
      </div>

      {/* 7 Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
        {STORY_STEPS.map((step, idx) => {
          const IconComponent = iconMap[step.icon] || Sparkles;

          return (
            <div
              key={step.number}
              className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-200 relative group"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                  {step.number}
                </span>
                <IconComponent className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-500 leading-tight">{step.desc}</p>
              </div>

              {/* Connecting Arrow for Desktop */}
              {idx < STORY_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
