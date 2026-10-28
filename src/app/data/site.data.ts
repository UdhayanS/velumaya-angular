/**
 * All site content lives here. Original copy comes from the old velumaya site,
 * re-worded for Saudi Arabia. Items marked NEW are additions for the redesign.
 */

export const SITE = {
  name: 'Velumaya Logistics LLC',
  brand: 'Velu Maya',
  url: 'https://www.velumaya.com',
  email: 'info@velumaya.com',
  linkedin: 'https://www.linkedin.com/company/velumaya-logistics/',
  // TODO: the old site only had a UAE (+971) number. Add the Saudi number here, e.g. '+966 5X XXX XXXX'.
  phone: '' as string,
  city: 'Riyadh',
  country: 'Saudi Arabia',
  location: 'Riyadh, Saudi Arabia',
  mapQuery: 'Riyadh, Saudi Arabia',
  year: new Date().getFullYear(),
};

export const NAV = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'FAQ', path: '/faq' },
];

export const HERO = {
  eyebrow: 'Saudi Arabia',
  title: 'Reliable Logistics & Manpower Consulting in Saudi Arabia',
  subtitle: 'Dependable logistics support and workforce solutions for businesses across the Kingdom.',
};

export const ABOUT = {
  eyebrow: 'About Us',
  title: 'About Velumaya Logistics LLC',
  paragraphs: [
    'Velumaya Logistics LLC is a Saudi Arabia-based logistics and manpower consulting company committed to helping businesses operate efficiently and scale with confidence. We partner with organizations across the Kingdom to deliver dependable logistics support and workforce solutions tailored to real operational needs.',
    'With a strong understanding of Saudi regulations and industry practices, we provide services that are practical, compliant, and results-driven.',
  ],
  badge: 'Saudi Arabia',
  // NEW
  points: ['Nationwide coordination', 'Compliance-first approach', 'Tailored to your operation', 'Responsive, transparent service'],
};

export const HIGHLIGHTS = [
  {
    icon: 'truck',
    title: 'Reliable Logistics Support',
    text: 'End-to-end logistics coordination ensuring timely deliveries, smooth operations, and supply chain efficiency across Saudi Arabia.',
  },
  {
    icon: 'users',
    title: 'Professional Manpower Solutions',
    text: 'Skilled and semi-skilled manpower solutions designed to meet operational demands across multiple industries.',
  },
  {
    icon: 'shield',
    title: 'Trusted & Compliant',
    text: 'Aligned with Saudi regulations, delivering transparent, reliable, and long-term service partnerships.',
  },
];

export const SERVICES = [
  {
    num: '01',
    icon: 'truck',
    image: 'images/logistic.png',
    title: 'Logistics Solutions',
    text: 'End-to-end logistics support including transportation, planning, and supply chain coordination.',
    bullets: ['Shipment planning & tracking', 'Warehousing coordination', 'Supply chain support'], // NEW
  },
  {
    num: '02',
    icon: 'users',
    image: 'images/engineer.png',
    title: 'Manpower Consulting',
    text: 'Skilled and semi-skilled workforce solutions tailored to your operational requirements.',
    bullets: ['Skilled & semi-skilled staffing', 'Workforce planning', 'Onboarding support'],
  },
  {
    num: '03',
    icon: 'plane',
    image: 'images/call.png',
    title: 'Transportation Support',
    text: 'Efficient local and regional transportation coordination for seamless deliveries.',
    bullets: ['Local & regional deliveries', 'Fleet coordination', 'On-time dispatch'],
  },
  {
    num: '04',
    icon: 'clipboard',
    image: 'images/conversation.png',
    title: 'Operational Consulting',
    text: 'Customized consulting to improve efficiency, reduce costs, and streamline operations.',
    bullets: ['Process review', 'Cost optimisation', 'Operational planning'],
  },
];

// Industries from the old marquee / FAQ, shown as a carousel. NEW: descriptions.
export const INDUSTRIES = [
  { icon: 'box', title: 'Logistics & Supply Chain', text: 'Planning, transport and distribution coordination.', image: 'images/truck-shipping-port.jpg', pos: 'center' },
  { icon: 'building', title: 'Construction', text: 'Reliable manpower and material movement for projects.', image: 'images/logistics-professional-overseeing-trucking-fleet.jpg', pos: 'left center' },
  { icon: 'gear', title: 'Manufacturing', text: 'Workforce and inbound/outbound logistics for plants.', image: 'images/transport-logistics-concept.jpg', pos: 'right center' },
  { icon: 'cart', title: 'Retail & Distribution', text: 'Timely replenishment across stores and warehouses.', image: 'images/truck-shipping-port.jpg', pos: 'left center' },
  { icon: 'wrench', title: 'Facilities Management', text: 'Skilled teams to keep facilities running smoothly.', image: 'images/logistics-professional-overseeing-trucking-fleet.jpg', pos: 'right center' },
  { icon: 'briefcase', title: 'Corporate Services', text: 'Flexible workforce and support for growing companies.', image: 'images/transport-logistics-concept.jpg', pos: 'left center' },
];

// NEW
export const PROCESS = [
  { icon: 'chat', title: 'Consult', text: 'We listen to your operational needs, volumes and timelines.' },
  { icon: 'clipboard', title: 'Plan', text: 'A practical, compliant plan with clear scope and responsibilities.' },
  { icon: 'truck', title: 'Deploy', text: 'Logistics and manpower mobilised quickly to where you need them.' },
  { icon: 'chart', title: 'Support & Improve', text: 'Ongoing coordination and regular review to keep improving.' },
];

// NEW
export const WHY = [
  { icon: 'shield', title: 'Regulation-aware', text: 'We work within Saudi labour and logistics requirements so you can focus on your business.' },
  { icon: 'clock', title: 'Responsive', text: 'Enquiries are reviewed and answered promptly by the people who will do the work.' },
  { icon: 'target', title: 'Tailored', text: 'No one-size-fits-all packages: each solution is built around your operation.' },
  { icon: 'globe', title: 'Local & regional reach', text: 'Coordination across Saudi cities and industrial hubs, and beyond when needed.' },
];

// NEW: service areas (please confirm the list)
export const COVERAGE = ['Riyadh', 'Jeddah', 'Dammam', 'Makkah', 'Madinah', 'Jubail', 'Yanbu', 'Khobar'];

export const TEAM = {
  eyebrow: 'Leadership',
  title: 'Meet Our Team',
  subtitle: 'The visionary minds driving Velumaya Logistics forward with passion and expertise',
  members: [
    {
      name: 'Sabariganth Raja',
      role: 'Founder & Managing Director',
      image: 'images/sabari-img.jpg',
      bio: [
        'With a strong focus on innovation, reliability, and customer-centric growth, Sabariganth Raja leads Velumaya with a clear vision for building trusted logistics and business solutions.',
        'His leadership blends strategic thinking with a hands-on approach to delivering excellence across every engagement.',
      ],
    },
  ],
};

export const FAQS = [
  {
    q: 'What services does Velumaya Logistics LLC provide?',
    a: 'We provide professional logistics services and manpower consulting solutions to businesses across Saudi Arabia. Our offerings include transportation coordination, logistics planning, supply chain support, and workforce management.',
  },
  {
    q: 'Do you offer customized logistics and manpower solutions?',
    a: 'Yes. We work closely with each client to understand their operational needs and deliver tailored logistics and manpower solutions that are practical, efficient, and cost-effective.',
  },
  {
    q: 'Which industries do you serve?',
    a: 'We serve a wide range of industries including logistics and supply chain, construction, manufacturing, retail and distribution, facilities management, and corporate services.',
  },
  {
    q: 'How can I request a quote or consultation?',
    a: 'You can contact us via phone or email, or submit your enquiry through our website contact form. Our team will review your requirements and respond promptly.',
  },
  // NEW
  {
    q: 'Which areas of Saudi Arabia do you cover?',
    a: 'We support clients in major cities and industrial hubs across the Kingdom, including Riyadh, Jeddah and Dammam. Tell us your location and we will confirm how we can support you.',
  },
];

export const CTA = {
  text: 'Ready to move your business forward?',
  sub: 'Tell us about your logistics and manpower requirements — we respond promptly.',
};

export const CONTACT = {
  eyebrow: 'Get In Touch',
  title: 'Contact Us',
  subtitle: "Let's discuss your logistics and manpower requirements",
  text: 'Velumaya Logistics LLC is here to support your business with reliable logistics services and professional manpower consulting solutions. Reach out to us using the form, and our team will respond promptly.',
};

export const ENQUIRY_TYPES = ['Logistics Solutions', 'Manpower Consulting', 'Transportation Support', 'Operational Consulting', 'Other'];
