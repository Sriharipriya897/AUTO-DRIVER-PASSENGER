export const INITIAL_ZONES = [
  {
    id: 'gandhipuram',
    name: 'Gandhipuram',
    subtitle: 'Central Bus Stand & Commercial Hub',
    x: 430,
    y: 190,
    requests: 18,
    autos: 4,
    status: 'high', // 'high' | 'moderate' | 'balanced'
    distance: '2.1 km',
    eta: '12 min',
    desc: 'Peak passenger backlog near Cross Cut Rd & Town Bus Stand',
    surgeBonus: '₹45 extra per trip',
    landmark: 'Central Bus Stand'
  },
  {
    id: 'ukkadam',
    name: 'Ukkadam',
    subtitle: 'Idle Stand (Your Location)',
    x: 320,
    y: 390,
    requests: 5,
    autos: 14,
    status: 'balanced',
    isDriverCurrent: true,
    distance: '0 km',
    eta: '0 min',
    desc: 'High auto availability, low passenger request volume',
    landmark: 'Ukkadam Auto Stand'
  },
  {
    id: 'rspuram',
    name: 'RS Puram',
    subtitle: 'DB Road Shopping & Dining Area',
    x: 240,
    y: 240,
    requests: 10,
    autos: 8,
    status: 'moderate',
    distance: '3.4 km',
    eta: '16 min',
    desc: 'Steady shopping & evening dining demand',
    surgeBonus: '₹20 extra per trip',
    landmark: 'DB Road Circle'
  },
  {
    id: 'peelamedu',
    name: 'Peelamedu',
    subtitle: 'PSG Colleges & TIDEL Park',
    x: 600,
    y: 170,
    requests: 12,
    autos: 9,
    status: 'moderate',
    distance: '5.8 km',
    eta: '22 min',
    desc: 'Evening tech park outflow & college departure',
    surgeBonus: '₹25 extra per trip',
    landmark: 'TIDEL Park Junction'
  },
  {
    id: 'singanallur',
    name: 'Singanallur',
    subtitle: 'Trichy Road Terminal',
    x: 570,
    y: 360,
    requests: 4,
    autos: 12,
    status: 'balanced',
    distance: '6.2 km',
    eta: '24 min',
    desc: 'Sufficient autos waiting at intercity stand',
    landmark: 'Singanallur Lake Corner'
  },
  {
    id: 'saravanampatti',
    name: 'Saravanampatti',
    subtitle: 'IT Corridor & Universities',
    x: 500,
    y: 80,
    requests: 9,
    autos: 7,
    status: 'moderate',
    distance: '7.5 km',
    eta: '28 min',
    desc: 'Moderate campus & IT park activity',
    surgeBonus: '₹15 extra per trip',
    landmark: 'CHIL SEZ IT Park'
  }
];

export const STORY_STEPS = [
  {
    number: 1,
    icon: 'UserCheck',
    title: 'Passenger Needs Auto',
    desc: 'Passenger requests an auto rickshaw in high-density areas like Gandhipuram.'
  },
  {
    number: 2,
    icon: 'Radio',
    title: 'Demand Detected',
    desc: 'AutoFlow system aggregates real-time passenger requests across Coimbatore city zones.'
  },
  {
    number: 3,
    icon: 'Scale',
    title: 'Demand–Supply Gap',
    desc: 'Algorithm identifies a severe mismatch (e.g. 18 requests vs. 4 available autos).'
  },
  {
    number: 4,
    icon: 'BellRing',
    title: 'Smart Relocation Alert',
    desc: 'System sends a targeted push notification to nearby idle drivers in low-demand stands.'
  },
  {
    number: 5,
    icon: 'CheckCircle2',
    title: 'Driver Accepts',
    desc: 'Driver accepts the relocation suggestion to secure higher ride volume.'
  },
  {
    number: 6,
    icon: 'Navigation',
    title: 'Moves Toward Demand',
    desc: 'Driver navigates toward Gandhipuram high-demand area guided by AutoFlow.'
  },
  {
    number: 7,
    icon: 'Sparkles',
    title: 'Gap Becomes Balanced',
    desc: 'More autos become available, reducing passenger wait times & boosting driver income.'
  }
];

export const DRIVER_PROFILE = {
  name: 'Murugan K.',
  id: 'CB-AUTO-8842',
  vehicle: 'TN 37 CZ 4920 (Bajaj RE Green/Yellow)',
  stand: 'Ukkadam Stand',
  rating: 4.9,
  todayTrips: 9,
  todayEarnings: '₹1,240',
  idleTimeSaved: '42 mins'
};

export const RECENT_ALERTS_LOG = [
  {
    id: 1,
    time: '5 mins ago',
    title: 'Relocation Suggested: Gandhipuram',
    detail: '18 requests • 4 autos (High Surge)',
    status: 'Active'
  },
  {
    id: 2,
    time: '45 mins ago',
    title: 'Relocation Completed: RS Puram',
    detail: '3 trips completed • ₹380 earned',
    status: 'Completed'
  },
  {
    id: 3,
    time: '2 hours ago',
    title: 'Demand Balanced: Ukkadam',
    detail: 'Optimal autos in area',
    status: 'Info'
  }
];
