// The landing-page icon set, shared by the premium page body and the /lp
// directory cards so both draw from one definition.
import type { PremiumIcon } from './landing';

export const ICON: Record<PremiumIcon, string> = {
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/>',
  price:    '<path d="M4 4h16v16H4z"/><path d="M8 12h8M8 8h8M8 16h5"/>',
  visit:    '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
  shield:   '<path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z"/><polyline points="9 12 11 14 15 10"/>',
  kitchen:  '<path d="M4 20h16"/><path d="M6 20v-6h12v6"/><path d="M10 14V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><path d="M12 7V4"/><path d="M9 4h6"/>',
  bath:     '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z"/><path d="M6 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2"/><path d="M5 22l1-2M19 22l-1-2"/>',
  mixer:    '<path d="M12 21v-9"/><path d="M8 12h8a2 2 0 0 0 2-2V8H6v2a2 2 0 0 0 2 2z"/><path d="M12 8V4"/><path d="M8 4h8"/><path d="M18 8h3v3"/>',
  shower:   '<path d="M4 4h4a4 4 0 0 1 4 4v2"/><path d="M8 10h8"/><path d="M9 14v1M12 14v1M15 14v1M10 18v1M14 18v1"/>',
  garden:   '<path d="M4 8h9a3 3 0 0 1 3 3v2"/><path d="M4 6v4"/><path d="M8 8V5h3"/><path d="M16 13c0 3-2 5-2 5s-2-2-2-5"/><path d="M14 18v3"/>',
  swap:     '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  gauge:    '<path d="M4 15a8 8 0 0 1 16 0"/><path d="M12 15l3.5-4.5"/><circle cx="12" cy="15" r="1.5"/><path d="M2 19h20"/>',
  home:     '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  boiler:   '<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="9" r="2.5"/><path d="M9 15h6M9 18h6"/>',
  pipe:     '<path d="M3 8h8a3 3 0 0 1 3 3v10"/><path d="M3 5v6"/><path d="M11 21h6"/><path d="M3 8H1"/>',
  valve:    '<circle cx="12" cy="13" r="4"/><path d="M12 9V4"/><path d="M8 4h8"/><path d="M2 13h6M16 13h6"/>',
  drop:     '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  toilet:   '<path d="M7 3h10v8H7z"/><path d="M5 11h14a7 7 0 0 1-7 7 7 7 0 0 1-7-7z"/><path d="M9 18l-1 3h8l-1-3"/>',
  cistern:  '<rect x="5" y="4" width="14" height="11" rx="2"/><path d="M5 9h14"/><path d="M9 4V2M12 15v6"/>',
  flush:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  plunger:  '<path d="M12 2v10"/><path d="M6 12h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2z"/><path d="M5 15l-1 6h16l-1-6"/>',
  pump:     '<circle cx="12" cy="12" r="8"/><path d="M12 8a4 4 0 1 0 4 4"/><path d="M12 12l3-3"/>',
  seal:     '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  certificate: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/><circle cx="16" cy="17" r="2"/>',
  key:      '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9"/><path d="M16 4l3 3M14 7l2 2"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"/><path d="M10 21v-3h4v3"/>',
  clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2"/><path d="M9 11l2 2 4-4"/><path d="M9 17h6"/>',
  phone:    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  wrench:   '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  floor:    '<path d="M3 14h18"/><path d="M3 18h18"/><path d="M3 22h18"/><path d="M8 14v4M16 14v4M12 18v4"/><path d="M12 3v7"/><path d="M9.5 6.5 12 3l2.5 3.5"/>',
  thermal:  '<path d="M14 14.76V4a2 2 0 1 0-4 0v10.76a4 4 0 1 0 4 0z"/><path d="M12 8v7"/>',
  acoustic: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  radiator: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14M12 5v14M16 5v14"/><path d="M6 21h12"/>',
  appliance:'<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 7h.01M12 7h.01"/>',
  ceiling:  '<path d="M3 4h18"/><path d="M7 4v3a5 5 0 0 0 10 0V4"/><path d="M12 12v3"/><path d="M12 21c-1.7 0-3-1.2-3-2.8 0-1.6 3-5.2 3-5.2s3 3.6 3 5.2c0 1.6-1.3 2.8-3 2.8z"/>',
};

/** Inline SVG markup for an icon, for use with Astro's `set:html`. */
export const iconSvg = (k: PremiumIcon, size = 22) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
