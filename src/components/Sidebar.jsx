import React from 'react';
import { LayoutDashboard, MapPin, Bell, Compass, History, HelpCircle, Layers } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, activeView }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'map', label: 'Demand Map', icon: MapPin },
    { id: 'alerts', label: 'Relocation Alerts', icon: Bell, badge: '1' },
    { id: 'trips', label: 'Trips & Earnings', icon: History },
    { id: 'how-it-works', label: 'How It Works', icon: HelpCircle },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 p-4 shrink-0 flex lg:flex-col justify-between overflow-x-auto">
      <div className="flex lg:flex-col items-center lg:items-stretch gap-1 w-full">
        <div className="hidden lg:block px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          {activeView === 'driver' ? 'Driver Control Panel' : 'Passenger Hub'}
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-red-100 text-red-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* College Project Meta Tag */}
      <div className="hidden lg:block mt-8 pt-4 border-t border-slate-100 px-3">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Design Thinking Project</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
            Coimbatore Auto Demand-Supply Relocation Concept Prototype.
          </p>
        </div>
      </div>
    </aside>
  );
}
