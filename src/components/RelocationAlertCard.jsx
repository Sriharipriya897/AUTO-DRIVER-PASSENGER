import React, { useState, useEffect } from 'react';
import { AlertTriangle, Navigation, CheckCircle2, Clock, MapPin, Zap, ArrowRight, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function RelocationAlertCard({ relocationState, onAccept, onDecline, onReset }) {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('Heading toward high-demand area');

  // Handle live progress timer during navigation state
  useEffect(() => {
    let timer;
    if (relocationState === 'navigating') {
      setProgress(0);
      setStepText('Heading toward high-demand area...');

      const duration = 6000; // 6 seconds simulation
      const intervalTime = 100;
      const stepIncrement = 100 / (duration / intervalTime);

      timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + stepIncrement;
          if (next >= 30 && next < 70) {
            setStepText('Passing Cross Cut Road Junction (4 min left)...');
          } else if (next >= 70 && next < 95) {
            setStepText('Approaching Gandhipuram Bus Stand Stand (1 min left)...');
          } else if (next >= 100) {
            clearInterval(timer);
            // Trigger confetti celebration
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.6 }
            });
            return 100;
          }
          return next;
        });
      }, intervalTime);
    }
    return () => clearInterval(timer);
  }, [relocationState]);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        
        {/* STATE 1: IDLE / ALERT WAITING */}
        {relocationState === 'idle' && (
          <motion.div
            key="idle-alert"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border-2 border-red-200 shadow-xl overflow-hidden relative"
          >
            {/* Top Red Gradient Banner */}
            <div className="bg-gradient-to-r from-red-600 to-amber-600 px-6 py-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm tracking-wide">
                <span className="text-lg animate-bounce">🚨</span>
                <span>Smart Relocation Alert</span>
              </div>
              <span className="bg-white/20 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                Surge Zone Detected
              </span>
            </div>

            {/* Alert Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <span>High passenger demand detected in</span>
                    <span className="text-blue-600 underline decoration-blue-300">Gandhipuram</span>
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    AutoFlow algorithm detected 14 passengers waiting at Central Bus Stand stand with only 4 idle drivers.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-100 p-3 rounded-xl text-right shrink-0">
                  <div className="text-xs text-red-600 font-semibold">Demand Surge Bonus</div>
                  <div className="text-lg font-black text-red-700">+45% Earnings</div>
                </div>
              </div>

              {/* Pill Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-500 font-medium">Passenger Requests</div>
                  <div className="text-base font-black text-red-600 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    18 Requests
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <div className="text-[11px] text-slate-500 font-medium">Current Supply</div>
                  <div className="text-base font-bold text-amber-700 mt-0.5">
                    4 Autos Nearby
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-slate-500 font-medium">Distance from Ukkadam</div>
                  <div className="text-base font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    2.1 km (12 min)
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onAccept}
                  className="w-full sm:w-auto flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Navigation className="w-4 h-4 transform rotate-45" />
                  <span>Accept Suggestion</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onDecline}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-semibold text-sm transition-colors border border-slate-200"
                >
                  Not Now
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* STATE 2: NAVIGATING / RELOCATION STARTED */}
        {relocationState === 'navigating' && (
          <motion.div
            key="navigating-alert"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-white rounded-2xl border-2 border-blue-400 shadow-xl p-6"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md animate-pulse">
                  <Navigation className="w-5 h-5 transform rotate-45" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      Relocation Started
                    </span>
                    <span className="text-xs text-slate-400 font-medium">• Est. time: 12 min</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Navigating to Gandhipuram High-Demand Area
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-medium text-slate-500">Live Progress</div>
                <div className="text-lg font-black text-blue-700">{Math.round(progress)}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-3 border border-slate-200">
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-blue-600 animate-spin-slow" />
                <span>{stepText}</span>
              </div>
              <span className="font-bold text-blue-700">Ukkadam → Gandhipuram</span>
            </div>
          </motion.div>
        )}

        {/* STATE 3: RELOCATION COMPLETED / SUCCESS CARD */}
        {relocationState === 'completed' && (
          <motion.div
            key="completed-alert"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border-2 border-emerald-400 shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight">Demand Balanced ✓</h3>
                    <p className="text-emerald-100 text-xs font-medium mt-0.5">
                      More autos are now available in Gandhipuram area.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onReset}
                  className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Re-simulate
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-center">
                  <div className="text-xs text-emerald-700 font-semibold">Zone Status</div>
                  <div className="text-base font-black text-emerald-800 mt-1 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    🟢 BALANCED
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <div className="text-xs text-slate-500 font-semibold">Available Autos</div>
                  <div className="text-base font-black text-slate-800 mt-1">
                    <span className="line-through text-slate-400 text-xs mr-1">4</span> 15 Autos
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl text-center">
                  <div className="text-xs text-blue-700 font-semibold">Estimated Fare Surge</div>
                  <div className="text-base font-black text-blue-800 mt-1">
                    +₹45 Extra Earned
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>The demand–supply gap in Gandhipuram has been successfully resolved.</span>
                <span className="font-bold text-emerald-700">Trip Queue Ready</span>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
