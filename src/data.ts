import type { Site } from './types';

// All site copy lives here. Keep company-sensitive details (budgets, contract
// values, consultant names, internal dates) out of this file: the site is public.
export const site: Site = {
  name: 'Youmans Yuan',
  fullName: 'Shaojun (Youmans) Yuan',
  headline: 'Youmans Yuan.',
  tagline: 'Mining engineer. Project manager.',
  intro:
    'Engineer-in-Training at Elk Valley Resources. I manage capital projects at Fording River Operations, from business case through construction and closeout.',
  email: 'shaojun.yuan@mail.mcgill.ca',
  links: {
    linkedin: 'https://www.linkedin.com/in/youmans-yuan-8b673a232/',
    github: 'https://github.com/YoumansYuan',
    archive: '/archive/',
  },

  stats: [
    { value: 5, label: 'capital projects I manage today' },
    { value: 80, prefix: '~', label: 'blast designs as a co-op' },
    { value: 20, prefix: '~', label: 'in-pit dewatering wells designed' },
    { value: 12, label: 'months on shift in the pit' },
  ],

  current: {
    title: 'Engineer-in-Training, Projects',
    org: 'Elk Valley Resources, a Glencore company',
    place: 'Fording River Operations · Elkford, BC',
    period: 'June 2026 – Present',
    intro:
      "I'm the project manager and owner's lead for five capital projects supporting Mine Operations, Tailings and the Plant.",
    points: [
      'Own each project from business case and engineering through funding approval, construction, commissioning and closeout.',
      'Direct consultants and contractors: scope, competitive procurement, schedule, cost, quality, change and contractor safety.',
      'Build business cases, estimates and funding requests, and report to senior leadership through the Project Steering Committee.',
      'Work with the regulatory approvals team on permits, and bring Operations, Plant, Geotechnical and Supply onto one plan.',
    ],
  },

  workProjects: [
    {
      name: 'Swift 4 Pre-Benching',
      area: 'Mine development',
      summary:
        'Pre-bench configurations and haul access ahead of production mining, reducing geotechnical and operational risk in future mining areas. From scope and procurement through field execution and handover to Mine Operations.',
      points: [
        'Short-range plans with Operations, Engineering and Survey',
        '~20-person contractor crew and earthmoving fleet',
        'Quantity and unit-rate cost control',
        'Field safety audits and ground control standards',
      ],
      featured: true,
    },
    {
      name: 'Turnbull TSF Raise',
      area: 'Tailings',
      summary:
        'A staged dam raise securing long-term tailings capacity. I rebuilt the cost estimate from site actuals and lead engineering, approvals and construction.',
    },
    {
      name: 'Eagle East 2',
      area: 'New pit',
      summary:
        'A new pit to sustain future production, bringing together pit design, slope scenarios, economics and permitting.',
    },
    {
      name: 'Reject Haul Re-route',
      area: 'Safety',
      summary:
        'Separates heavy haul trucks from pedestrians and light vehicles in the plant area, from route selection to construction.',
    },
    {
      name: 'Breaker & ROM Dust Collector',
      area: 'Plant',
      summary:
        'A dust control upgrade. I lead the regulatory application with the BC Ministry while delivering design and construction.',
    },
  ],

  pastRoles: [
    {
      title: 'Engineering Co-op',
      org: 'Drill & Blast and Mine Dewatering',
      place: 'Teck Resources / Elk Valley Resources · Fording River',
      period: 'Sept 2023 – Aug 2024',
      points: [
        'Created bench drill designs in Hexagon MinePlan 3D and pushed approved designs to DABS for drilling and loading control.',
        'Completed ~80 blast designs in Orica SHOTPlus, with loading and timing, on a 7×7 rotation.',
        'Designed ~20 in-pit deep dewatering wells to keep shovel headings dry for pit-bottom mining.',
        'Drew pre-blast clearance and post-blast survey maps, flew drones over blasts and ran gamma-density logging.',
        'Analysed dewatering data in Power BI and tracked drilling contractor progress.',
      ],
      tools: ['MinePlan 3D', 'SHOTPlus', 'DABS', 'Power BI', 'RPAS'],
    },
    {
      title: 'Research Assistant',
      org: 'McGill Geomechanics Lab',
      place: 'Microwave-assisted mineral processing · Montreal',
      period: 'Summers 2023 & 2025',
      points: [
        'Screened 200 kg of kimberlite into 52 graded samples for microwave pre-weakening, roll crushing and sieve analysis.',
        'Found the power and exposure settings that saved the most crushing energy, using heating efficiency and D50/D80.',
        'Preheated iron ore pellets and dried pellet plant tailings on a 15 kW industrial system: ~650 °C and 90–95% moisture removal.',
        'Reached ~69% heating efficiency with calorimetry and thermography, and wrote the final technical report.',
      ],
      tools: ['Calorimetry', 'IR thermography', 'ASTM sieving', 'Excel'],
    },
  ],

  academic: [
    {
      kicker: 'Capstone · 2025',
      title: 'Baramiya Gold Project',
      summary:
        'A full underground pre-feasibility study. I led stope design, sequencing and the main ramp.',
      specs: [
        { value: '13.75 Mt', label: 'at 3.62 g/t Au' },
        { value: '2,900 t/d', label: 'over a 13-year life' },
        { value: 'US$370M', label: 'after-tax NPV' },
        { value: '~25%', label: 'IRR' },
      ],
      points: [
        'Cut-and-fill, modified Avoca and transverse longhole stoping across four zones',
        'Footwall ramp at −15% for 30 t trucks',
        'Productivity model from LHD and truck cycle times',
        'Stability analysis in RS2 and RS3',
      ],
      tools: ['Deswik', 'RS2', 'RS3', 'Excel'],
      tone: 'dark',
    },
    {
      kicker: 'Research · 2022',
      title: 'Quebec lithium value chain',
      summary:
        'The value chain of lithium in Quebec: the minerals and rocks it comes from, the life cycle of a lithium mine, and the financial outlook and benefits for the province.',
      tools: ['Mineralogy', 'Market analysis'],
      tone: 'light',
    },
    {
      kicker: 'Coursework',
      title: 'Mine ventilation design',
      summary:
        'Designed an underground mine ventilation network in Ventsim for the mine ventilation course.',
      tools: ['Ventsim Design'],
      tone: 'accent',
    },
    {
      kicker: 'Coursework',
      title: 'Pit optimization & geostatistics',
      summary:
        'Built block models and optimized open pits in Vulcan and Whittle. Modelled grade uncertainty with kriging and sequential Gaussian simulation.',
      tools: ['Vulcan', 'Whittle', 'SGeMS', 'Python'],
      tone: 'light',
    },
    {
      kicker: 'Side project · Python',
      title: 'Elevator puzzle game',
      summary:
        'A PyGame puzzle where the goal is to load elevators as efficiently as possible.',
      tools: ['Python', 'PyGame'],
      tone: 'light',
    },
    {
      kicker: 'Where it started · 2020',
      title: 'My first website',
      summary: 'Hand-coded in high school with HTML, CSS and JavaScript, and kept exactly as it was.',
      link: { label: 'Visit the archive', href: '/archive/' },
      tone: 'light',
    },
  ],

  skills: [
    {
      name: 'Project management',
      items: [
        'Scope, schedule & cost control',
        'Business cases & funding',
        'Cost estimating',
        'Procurement & bid evaluation',
        'Contract & change management',
        'Regulatory permitting',
        'Construction & closeout',
      ],
    },
    {
      name: 'Mine planning',
      items: ['Deswik CAD & Stope Optimizer', 'Hexagon MinePlan 3D', 'Maptek Vulcan', 'Whittle', 'Ventsim Design', 'AutoCAD & Civil 3D'],
    },
    {
      name: 'Drill, blast & ops',
      items: ['Orica SHOTPlus', 'DABS', 'CAT MineStar', 'Wenco', 'Instantel THOR'],
    },
    {
      name: 'Geotech & survey',
      items: ['Rocscience RS2, RS3, Dips', 'GeoStudio', 'SGeMS', 'Trimble GNSS', 'Total station', 'RPAS drone survey'],
    },
    {
      name: 'Data & code',
      items: ['Python', 'MATLAB', 'SQL', 'Power BI', 'Excel', 'TypeScript', 'AI agents (Claude)'],
    },
  ],

  keyCerts: ['BC Mine Supervisor Certification', 'Engineer-in-Training, EGBC'],
  certs: [
    'Transport Canada RPAS Pilot, Advanced',
    'Radiation Safety & TDG, portable gauges',
    'Class 7 transport, Type A packages',
    'WHMIS 2015',
    'BC Forest Safety, resource road driving',
    'ASA 101, 103 & 104 sailing',
    'CASI Level 1 snowboard instructor',
  ],

  results: [
    {
      sport: 'Mountain biking',
      items: [
        { place: '1st', event: 'Qingdao MTB race, 2018 & 2020' },
        { place: '1st', event: 'Qingdao dirt-jump race, 2020' },
        { place: '3rd', event: 'Weihai downhill, 2018' },
      ],
    },
    {
      sport: 'Sailing',
      items: [
        { place: '4th', event: 'China–Korea Youth Sailing, 2019' },
        { place: '4th', event: 'Qingdao Langya Cup Rally, 2020' },
        { place: '420', event: 'McGill Sailing Team, NEISA & CICSA' },
      ],
    },
  ],

  photos: [
    { src: 'img/mtb-enduro.jpg', alt: 'Riding an enduro mountain bike through a forest', caption: 'Enduro' },
    { src: 'img/sailing-winch.jpg', alt: 'Working a winch on a racing yacht', caption: 'Offshore racing' },
    { src: 'img/mtb-dirtjump.jpg', alt: 'Dirt jump on a hardtail bike', caption: 'Dirt jump' },
    { src: 'img/sailing-hobie.jpg', alt: 'Hobie 16 catamaran on the beach', caption: 'Hobie 16' },
    { src: 'img/mtb-race.jpg', alt: 'Racing a mountain bike on a forest trail', caption: 'Race day' },
  ],
};
