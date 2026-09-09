// Pre-rendered QR codes for the "scan instead of dial" popup (desktop and
// tablet only — see script.js). Generated once at build time as inline SVG,
// so the popup needs no client-side QR library and no third-party request.
import QRCode from 'qrcode';
import site from './site.json';

const svg = (text: string) =>
  QRCode.toString(text, {
    type: 'svg',
    margin: 0,
    color: { dark: '#0B2A42', light: '#00000000' },
  });

// The only genuine mobile number in the project — the one WhatsApp number —
// is who SMS and WhatsApp should reach, whichever phone link was clicked.
const mobileTel = `+${site.whatsapp.url.split('/').pop()}`;

export const qrCodes = {
  callBooking: await svg(`tel:${site.booking.tel}`),
  callManagement: await svg(`tel:${site.management.tel}`),
  sms: await svg(`sms:${mobileTel}`),
  whatsapp: await svg(site.whatsapp.url),
};

export const qrTargets = {
  smsDisplay: site.whatsapp.display,
  mobileTel,
};
