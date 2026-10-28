import { Routes } from '@angular/router';

// `title` and `data.description` feed the Seo service (see app.ts).
export const routes: Routes = [
  {
    path: '',
    title: 'Velumaya Logistics LLC | Logistics & Manpower in Saudi Arabia',
    data: { description: 'Velumaya Logistics LLC delivers reliable logistics, transportation and manpower consulting to businesses across Saudi Arabia, from Riyadh to Jeddah and Dammam.' },
    loadComponent: () => import('./pages/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About Us | Velumaya Logistics LLC, Saudi Arabia',
    data: { description: 'Learn about Velumaya Logistics LLC, a Saudi Arabia-based logistics and manpower consulting company delivering practical, compliant and results-driven solutions.' },
    loadComponent: () => import('./pages/about').then((m) => m.About),
  },
  {
    path: 'services',
    title: 'Logistics & Manpower Services in Saudi Arabia | Velumaya',
    data: { description: 'Logistics solutions, manpower consulting, transportation support and operational consulting for businesses across Saudi Arabia. Request a quote today.' },
    loadComponent: () => import('./pages/services').then((m) => m.Services),
  },
  {
    path: 'team',
    title: 'Our Team | Velumaya Logistics LLC',
    data: { description: 'Meet the leadership behind Velumaya Logistics LLC, a Saudi Arabia logistics and manpower consulting company led by founder Sabariganth Raja.' },
    loadComponent: () => import('./pages/team').then((m) => m.Team),
  },
  {
    path: 'faq',
    title: 'FAQ | Logistics & Manpower in Saudi Arabia | Velumaya',
    data: { description: 'Answers to common questions about Velumaya Logistics LLC services, industries served, coverage across Saudi Arabia and how to request a quote.' },
    loadComponent: () => import('./pages/faq').then((m) => m.Faq),
  },
  {
    path: 'contact',
    title: 'Contact Us | Velumaya Logistics LLC, Saudi Arabia',
    data: { description: 'Contact Velumaya Logistics LLC to discuss your logistics and manpower requirements in Saudi Arabia. Our team responds promptly.' },
    loadComponent: () => import('./pages/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
