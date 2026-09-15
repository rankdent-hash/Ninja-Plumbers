// Place names for postcode districts the site's own pages do not cover.
//
// src/data/postcodes.ts and src/data/areas.ts are the authority wherever they
// carry a district — they are the client's workbook and the pages built from
// it. Between them they name 129 of the 329 districts the admin map plots,
// which is why opening one borough used to show named areas and the next one
// showed bare codes.
//
// This file fills the other 200: the outer postcode areas the site has no
// pages for (BR CR DA EN HA IG KT RM SM TW UB WD) and the central sub-districts
// (EC1A-EC4Y, SW1A-SW1Y, W1B-W1W, WC1A-WC2R).
//
// These are the ordinary public names of the places each district covers, not
// claims about the business, and nothing here is customer-facing — it labels
// shapes on the internal map. Most districts genuinely cover several named
// places, so several are listed, most recognisable first.
//
// These were checked rather than trusted. src/lib/districtPlaces.ts throws if
// any code here is not one the map plots, or if the workbook has since grown to
// cover it (in which case the entry should be deleted, not left to shadow it).
// Separately, every town named by more than one district was measured against
// the map's own coordinates: districts sharing a name have to sit near each
// other, and the widest is Watford across WD17/18/19/24/25 at 3.4 miles, which
// is how Watford's districts really lie. A misremembered name would have shown
// up there as a town whose districts were miles apart.

export const DISTRICT_NAMES: Record<string, string[]> = {
  // --- Bromley and the Kent edge ---
  BR3: ['Beckenham'],
  BR4: ['West Wickham'],
  BR5: ['Orpington', 'St Mary Cray', 'Petts Wood'],
  BR6: ['Orpington', 'Farnborough', 'Green Street Green'],
  BR7: ['Chislehurst'],
  BR8: ['Swanley', 'Crockenhill'],

  // --- Croydon and the Surrey edge ---
  CR3: ['Caterham', 'Whyteleafe'],
  CR4: ['Mitcham'],
  CR5: ['Coulsdon', 'Chipstead'],
  CR6: ['Warlingham', 'Woldingham'],
  CR7: ['Thornton Heath'],
  CR8: ['Purley', 'Kenley'],

  // --- Dartford, Bexley and Gravesham ---
  DA1: ['Dartford'],
  DA2: ['Dartford', 'Wilmington', 'Joydens Wood'],
  DA3: ['Longfield', 'New Ash Green', 'Hartley'],
  DA4: ['Eynsford', 'Farningham', 'Horton Kirby'],
  DA5: ['Bexley', 'Albany Park'],
  DA6: ['Bexleyheath'],
  DA7: ['Bexleyheath', 'Barnehurst'],
  DA8: ['Erith', 'Northumberland Heath'],
  DA9: ['Greenhithe'],
  DA10: ['Swanscombe'],
  DA11: ['Gravesend', 'Northfleet'],
  DA12: ['Gravesend', 'Chalk'],
  DA13: ['Meopham', 'Istead Rise', 'Higham'],
  DA14: ['Sidcup', 'Foots Cray'],
  DA15: ['Sidcup', 'Blackfen', 'Longlands'],
  DA16: ['Welling'],
  DA17: ['Belvedere'],
  DA18: ['Thamesmead', 'Erith Marshes'],

  // --- City of London ---
  EC1A: ['Smithfield', "St Bartholomew's"],
  EC1M: ['Clerkenwell', 'Farringdon'],
  EC1N: ['Hatton Garden'],
  EC1R: ['Finsbury', 'Clerkenwell'],
  EC1V: ['Old Street', 'Finsbury'],
  EC1Y: ['Barbican', 'Old Street'],
  EC2A: ['Shoreditch', 'Liverpool Street'],
  EC2M: ['Liverpool Street', 'Broadgate'],
  EC2N: ['Old Broad Street'],
  EC2R: ['Bank', 'Moorgate'],
  EC2V: ['Guildhall', 'Gresham Street'],
  EC2Y: ['Barbican'],
  EC3A: ['Aldgate', 'Leadenhall'],
  EC3M: ['Fenchurch Street', "Lloyd's"],
  EC3N: ['Tower Hill', 'Aldgate'],
  EC3R: ['Monument', 'Eastcheap'],
  EC3V: ['Bank', 'Cornhill'],
  EC4A: ['Fleet Street'],
  EC4M: ["St Paul's"],
  EC4N: ['Bank', 'Cannon Street'],
  EC4R: ['Cannon Street'],
  EC4V: ['Blackfriars'],
  EC4Y: ['Temple', 'Blackfriars'],

  // --- Hertfordshire edge ---
  EN6: ['Potters Bar', 'Cuffley'],
  EN7: ['Cheshunt', 'Goffs Oak'],
  EN8: ['Cheshunt', 'Waltham Cross'],
  EN9: ['Waltham Abbey'],
  EN10: ['Broxbourne', 'Turnford'],

  // --- Harrow and Brent ---
  HA0: ['Wembley', 'Alperton'],
  HA4: ['Ruislip', 'South Ruislip'],
  HA6: ['Northwood'],
  HA7: ['Stanmore'],
  HA8: ['Edgware', 'Burnt Oak'],
  HA9: ['Wembley', 'Wembley Park'],

  // --- Redbridge, Barking and Epping edge ---
  IG1: ['Ilford'],
  IG2: ['Gants Hill', 'Newbury Park'],
  IG3: ['Seven Kings', 'Goodmayes'],
  IG4: ['Redbridge'],
  IG5: ['Clayhall'],
  IG6: ['Barkingside', 'Hainault'],
  IG7: ['Chigwell'],
  IG9: ['Buckhurst Hill'],
  IG10: ['Loughton'],
  IG11: ['Barking'],

  // --- Kingston, Surrey and the south west ---
  KT1: ['Kingston upon Thames'],
  KT2: ['Kingston upon Thames', 'Norbiton', 'Coombe'],
  KT3: ['New Malden'],
  KT4: ['Worcester Park'],
  KT5: ['Surbiton', 'Berrylands'],
  KT6: ['Surbiton', 'Tolworth'],
  KT7: ['Thames Ditton'],
  KT8: ['East Molesey', 'West Molesey'],
  KT9: ['Chessington'],
  KT10: ['Esher', 'Claygate', 'Hinchley Wood'],
  KT11: ['Cobham', 'Oxshott'],
  KT12: ['Walton-on-Thames', 'Hersham'],
  KT13: ['Weybridge'],
  KT14: ['West Byfleet', 'Byfleet'],
  KT15: ['Addlestone', 'New Haw'],
  KT16: ['Chertsey', 'Ottershaw'],
  KT17: ['Epsom', 'Ewell'],
  KT18: ['Epsom', 'Tattenham Corner'],
  KT19: ['Epsom', 'West Ewell'],
  KT20: ['Tadworth', 'Kingswood', 'Walton on the Hill'],
  KT21: ['Ashtead'],
  KT22: ['Leatherhead', 'Fetcham', 'Oxshott'],
  KT23: ['Bookham'],
  KT24: ['East Horsley', 'West Horsley', 'Effingham'],

  // --- Havering, Barking and Dagenham, Thurrock ---
  RM1: ['Romford'],
  RM2: ['Gidea Park'],
  RM3: ['Harold Wood', 'Harold Hill'],
  RM4: ['Havering-atte-Bower', 'Noak Hill', 'Stapleford Abbotts'],
  RM5: ['Collier Row'],
  RM6: ['Chadwell Heath'],
  RM7: ['Romford', 'Rush Green'],
  RM8: ['Dagenham', 'Becontree'],
  RM9: ['Dagenham', 'Becontree Heath'],
  RM10: ['Dagenham'],
  RM11: ['Hornchurch', 'Emerson Park'],
  RM12: ['Hornchurch', 'Elm Park'],
  RM13: ['Rainham', 'South Hornchurch'],
  RM14: ['Upminster', 'Cranham'],
  RM15: ['South Ockendon'],
  RM16: ['Grays', 'Chafford Hundred'],
  RM17: ['Grays'],
  RM18: ['Tilbury'],
  RM19: ['Purfleet'],
  RM20: ['West Thurrock', 'Lakeside'],

  // --- Sutton and Merton ---
  SM1: ['Sutton'],
  SM2: ['Sutton', 'Belmont'],
  SM3: ['Cheam', 'North Cheam'],
  SM4: ['Morden'],
  SM5: ['Carshalton'],
  SM6: ['Wallington', 'Beddington'],
  SM7: ['Banstead'],

  // --- Westminster SW1 ---
  SW1A: ['Westminster', 'Whitehall', 'Buckingham Palace'],
  SW1E: ['Victoria'],
  SW1H: ['Westminster', "St James's Park"],
  SW1P: ['Westminster', 'Pimlico'],
  SW1V: ['Pimlico'],
  SW1W: ['Belgravia'],
  SW1X: ['Knightsbridge', 'Belgravia'],
  SW1Y: ["St James's"],

  // --- Richmond, Hounslow and the Thames valley edge ---
  TW1: ['Twickenham', 'St Margarets'],
  TW2: ['Twickenham', 'Whitton'],
  TW3: ['Hounslow'],
  TW4: ['Hounslow', 'Hounslow West'],
  TW5: ['Heston', 'Cranford'],
  TW6: ['Heathrow Airport'],
  TW7: ['Isleworth'],
  TW8: ['Brentford'],
  TW9: ['Richmond', 'Kew'],
  TW10: ['Richmond', 'Ham', 'Petersham'],
  TW11: ['Teddington'],
  TW12: ['Hampton'],
  TW13: ['Feltham'],
  TW14: ['Feltham', 'Bedfont'],
  TW15: ['Ashford'],
  TW16: ['Sunbury-on-Thames'],
  TW17: ['Shepperton'],
  TW18: ['Staines-upon-Thames'],
  TW19: ['Stanwell', 'Wraysbury'],
  TW20: ['Egham', 'Englefield Green'],

  // --- Hillingdon and Ealing ---
  UB2: ['Southall'],
  UB3: ['Hayes', 'Harlington'],
  UB4: ['Hayes', 'Yeading'],
  UB5: ['Northolt'],
  UB6: ['Greenford', 'Perivale'],
  UB7: ['West Drayton', 'Yiewsley'],
  UB8: ['Uxbridge', 'Cowley'],
  UB9: ['Denham', 'Harefield'],
  UB10: ['Uxbridge', 'Hillingdon'],
  UB11: ['Stockley Park'],

  // --- West End W1 ---
  W1B: ['Regent Street'],
  W1C: ['Oxford Street', 'Mayfair'],
  W1D: ['Soho'],
  W1F: ['Soho'],
  W1G: ['Marylebone', 'Harley Street'],
  W1H: ['Marylebone'],
  W1J: ['Mayfair'],
  W1K: ['Mayfair'],
  W1S: ['Mayfair', 'Hanover Square'],
  W1T: ['Fitzrovia'],
  W1U: ['Marylebone'],
  W1W: ['Fitzrovia'],

  // --- Holborn, Bloomsbury and Covent Garden ---
  WC1A: ['Bloomsbury'],
  WC1B: ['Bloomsbury', 'British Museum'],
  WC1E: ['Bloomsbury', 'Fitzrovia'],
  WC1H: ['Bloomsbury', 'St Pancras'],
  WC1N: ['Bloomsbury', 'Great Ormond Street'],
  WC1R: ["Gray's Inn", 'Holborn'],
  WC1V: ['Holborn'],
  WC1X: ["King's Cross", 'Finsbury'],
  WC2A: ["Lincoln's Inn", 'Holborn'],
  WC2B: ['Covent Garden', 'Holborn'],
  WC2E: ['Covent Garden'],
  WC2H: ['Covent Garden', 'Leicester Square', 'Soho'],
  WC2N: ['Charing Cross', 'Trafalgar Square'],
  WC2R: ['Strand', 'Aldwych'],

  // --- Watford and Hertsmere ---
  WD3: ['Rickmansworth', 'Chorleywood'],
  WD4: ['Kings Langley'],
  WD5: ['Abbots Langley'],
  WD6: ['Borehamwood', 'Elstree'],
  WD7: ['Radlett', 'Shenley'],
  WD17: ['Watford'],
  WD18: ['Watford', 'West Watford'],
  WD19: ['Watford', 'Carpenders Park', 'Oxhey'],
  WD23: ['Bushey'],
  WD24: ['Watford', 'North Watford'],
  WD25: ['Watford', 'Garston', 'Leavesden'],
};
