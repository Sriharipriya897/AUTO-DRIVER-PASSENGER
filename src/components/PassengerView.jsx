import React, { useState } from 'react';
import { User, MapPin, Navigation, AlertCircle, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PassengerView({ onTriggerDriverAlert }) {
  const [pickup, setPickup] = useState('Gandhipuram (Central Bus Stand)');
  const [destination, setDestination] = useState('Coimbatore Junction Railway Station');
  const [requestState, setRequestState] = useState('idle'); // 'idle' | 'requesting' | 'result'
  const [requestStep, setRequestStep] = useState(0);

  const steps = [
    'Request Sent...',
    'Demand Detected in Gandhipuram...',
    'Nearby Autos Checked...'
  ];

  const handleRequestAuto = (e) => {
    e.preventDefault();
    setRequestState('requesting');
    setRequestStep(0);

    // Step animation sequence
    setTimeout(() => {
      setRequestStep(1);
    }, 1000);

    setTimeout(() => {
      setRequestStep(2);
    }, 2000);

    setTimeout(() => {
      setRequestState('result');
    }, 3200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Banner Intro */}
      <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold bg-blue-500/40 text-blue-100 px-3 py-1 rounded-full w-fit mb-2 border border-blue-400/30">
            <User className="w-3.5 h-3.5" /> Passenger Mode Simulation
          </div>
          <h2 className="text-xl font-bold tracking-tight">Passenger Ride Request Engine</h2>
          <p className="text-blue-100 text-xs mt-1">
            Simulate how a cluster of passenger ride requests creates a localized demand surge in Coimbatore.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Booking Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>🛺</span> Find an Auto in Coimbatore
          </h3>

          <form onSubmit={handleRequestAuto} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Current Location (High Demand Hub)</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-red-500 absolute left-3.5 top-3.5" />
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Gandhipuram (Central Bus Stand)">Gandhipuram (Central Bus Stand)</option>
                  <option value="RS Puram (DB Road)">RS Puram (DB Road)</option>
                  <option value="Peelamedu (TIDEL Park)">Peelamedu (TIDEL Park)</option>
                  <option value="Ukkadam Auto Stand">Ukkadam Stand</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Destination</label>
              <div className="relative">
                <Navigation className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5 transform rotate-45" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination in Coimbatore..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Ride Metadata */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <div>Est. Distance: <strong>3.2 km</strong></div>
              <div>Est. Standard Fare: <strong>₹85</strong></div>
            </div>

            <button
              type="submit"
              disabled={requestState === 'requesting'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
            >
              {requestState === 'requesting' ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <span>Request Auto</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Dynamic Simulation Output */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
          
          {requestState === 'idle' && (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-800">Passenger Request Ready</h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Click "Request Auto" to simulate how multiple passenger requests trigger the AutoFlow Demand-Supply mismatch system.
              </p>
            </div>
          )}

          {requestState === 'requesting' && (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-14 h-14 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin flex items-center justify-center" />
              
              <div className="space-y-2">
                <div className="text-sm font-bold text-slate-900">{steps[requestStep]}</div>
                <div className="text-xs text-blue-600 font-semibold">
                  Checking Coimbatore City Grid Sensors...
                </div>
              </div>
            </div>
          )}

          {requestState === 'result' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Passenger demand is currently high in this area.</span>
                </div>
                <p className="text-xs text-amber-700">
                  Multiple passengers are requesting autos at Gandhipuram Central Bus Stand.
                </p>
              </div>

              {/* Demand vs Supply Graphic */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
                <div className="text-xs font-bold text-slate-700">Demand Mismatch Detected:</div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-100 border border-red-200 p-3 rounded-lg text-center">
                    <div className="text-[11px] text-red-600 font-bold">Passenger Requests</div>
                    <div className="text-xl font-black text-red-700">18 Requests</div>
                  </div>

                  <div className="bg-slate-200 border border-slate-300 p-3 rounded-lg text-center">
                    <div className="text-[11px] text-slate-600 font-bold">Available Autos</div>
                    <div className="text-xl font-black text-slate-800">4 Autos</div>
                  </div>
                </div>
              </div>

              {/* Story Bridge to Driver */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl space-y-3">
                <p className="text-xs text-blue-900 font-medium leading-relaxed">
                  💡 <strong>Design Thinking Concept:</strong> This demand spike triggers an automated 
                  Smart Relocation Suggestion for nearby idle drivers waiting in low-demand stands like Ukkadam.
                </p>

                <button
                  onClick={onTriggerDriverAlert}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Switch to Driver View & Trigger Relocation Alert</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}
