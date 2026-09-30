import site from './site.json';

// The one business entity in structured data. Base.astro gives its
// LocalBusiness node this @id, and every Service node names it as provider,
// so search engines and AI answer engines join every service and sector page
// to the same company instead of reading many separate near-copies of it.
export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

// A provider reference that still stands on its own when the full
// LocalBusiness node is not on the page (most pages omit it).
export const providerRef = {
  '@type': ['Plumber', 'Electrician'],
  '@id': BUSINESS_ID,
  name: site.name,
  telephone: site.booking.tel,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
};
