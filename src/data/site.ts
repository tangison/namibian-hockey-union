/**
 * Verified facts about the Namibian Hockey Union.
 * Sourced from Tavily API queries (see PROOF.md and scripts/tavily-content.json).
 * Anything unverified is marked TBC and rendered as a notice, never fabricated.
 *
 * Primary sources (cross-verified):
 *  - FIH members page: https://www.fih.hockey/about-fih/ourmembers/dynamic/namibia
 *  - Wikipedia: https://en.wikipedia.org/wiki/Namibia_Hockey_Union
 *  - NNOC: https://olympic.org.na/members/affiliated-members/namibia-hockey-union
 *  - 2024 Men's Indoor Africa Cup: https://en.wikipedia.org/wiki/2024_Men%27s_Indoor_Africa_Cup
 *  - Namibia at the 2025 World Games: https://en.wikipedia.org/wiki/Namibia_at_the_2025_World_Games
 */

export const orgFacts = {
  name: "Namibian Hockey Union",
  shortName: "NHU",
  tagline: "The official home of hockey in Namibia.",
  description:
    "The Namibian Hockey Union is the national governing body for field and indoor hockey in Namibia, recognised by the International Hockey Federation (FIH) and the African Hockey Federation (AfHF), and affiliated to the Namibian National Olympic Committee.",
  sports: ["Indoor hockey", "Field hockey"],
  jurisdiction: "Namibia",
  headquarters: "Windhoek, Namibia",
  founded: "TBC",
  website: "namibiahockey.org",

  // Verified contact details (per FIH members page)
  contact: {
    postalAddress: "PO Box 25799, Post Street Mall, Windhoek, Namibia 9000",
    emails: [
      { label: "General", value: "secretary@namibiahockey.org" },
      { label: "President", value: "president@namibiahockey.org" },
    ],
    phone: "+264 61 25438",
    mobile: "+264 81 166 2875",
    website: "https://namibiahockey.org",
  },

  // Verified executive committee (per FIH members page, cross-checked against Wikipedia)
  // Note: Wikipedia lists Reagon Graig as president (older record); FIH lists Carin Slabbert (current, 2024).
  // We follow the FIH record as authoritative.
  executiveCommittee: [
    { role: "President", name: "Mrs. Carin Slabbert" },
    { role: "Vice-President (Women)", name: "Marietta Stoffberg" },
    { role: "Vice-President (Men)", name: "Conrad Wessels" },
    { role: "Secretary-General", name: "Jens Unterlechner" },
    { role: "Treasurer", name: "Julia Lasarus" },
    { role: "Executive: Rules, Umpires and Leagues", name: "Sedtric Makati" },
    { role: "Executive: Marketing", name: "Tunomwaameni Epafras" },
  ],

  // Verified sponsors (per Wikipedia NHU article)
  sponsors: [
    "MTC Namibia",
    "NAMDIA",
    "Standard Bank Namibia",
    "NamibRe",
    "Bank Windhoek",
  ],

  verifiedSources: [
    { label: "FIH membership", url: "https://www.fih.hockey/about-fih/ourmembers/dynamic/namibia" },
    { label: "NNOC affiliated member", url: "https://olympic.org.na/members/affiliated-members/namibia-hockey-union" },
    { label: "Wikipedia entry", url: "https://en.wikipedia.org/wiki/Namibia_Hockey_Union" },
    { label: "2024 Men's Indoor Africa Cup", url: "https://en.wikipedia.org/wiki/2024_Men%27s_Indoor_Africa_Cup" },
    { label: "Namibia at the 2025 World Games", url: "https://en.wikipedia.org/wiki/Namibia_at_the_2025_World_Games" },
  ],
  verifiedSocials: [
    { label: "Instagram", handle: "@namibiahockeyunion", url: "https://www.instagram.com/namibiahockeyunion" },
    { label: "Facebook", handle: "NamibiaHockey", url: "https://www.facebook.com/NamibiaHockey" },
    { label: "X (Twitter)", handle: "@NamibiaHockey", url: "https://twitter.com/NamibiaHockey" },
  ],

  // Verified recent results (from Tavily / Wikipedia)
  verifiedResults: [
    {
      event: "2024 Indoor Africa Cup — Men's final",
      opponent: "South Africa",
      score: "4-3 (shootout, 3-3 FT)",
      result: "Gold medal",
      venue: "Swakopmund, Namibia",
      date: "26 May 2024",
      note: "First-ever Indoor Africa Cup gold for Namibia men. Qualified for 2025 FIH Indoor World Cup.",
      source: "https://en.wikipedia.org/wiki/2024_Men%27s_Indoor_Africa_Cup",
    },
    {
      event: "2024 Indoor Africa Cup — Women's final",
      opponent: "South Africa",
      score: "TBC",
      result: "Silver medal",
      venue: "Swakopmund, Namibia",
      date: "26 May 2024",
      note: "Verified via MTC Dome Namibia / AfHF. Full scoreline TBC.",
      source: "https://www.facebook.com/DomeNamibia/posts/874723574693910",
    },
    {
      event: "2025 World Games — Inline hockey bronze",
      opponent: "France",
      score: "Bronze medal",
      result: "Bronze medal",
      venue: "Chengdu, China",
      date: "August 2025",
      note: "First-ever Namibia medal at the World Games. (Inline hockey — governed by NIIHA, with NHU players.) Head coach: Nadia Schmidt.",
      source: "https://en.wikipedia.org/wiki/Namibia_at_the_2025_World_Games",
    },
  ],

  // Verified events
  verifiedEvents: [
    {
      name: "Indoor Africa Cup 2024",
      year: "2024",
      venue: "Swakopmund, Namibia",
      dates: "23–26 May 2024",
      source: "Verified via Wikipedia and AfHF",
    },
    {
      name: "Namibia vs South Africa — Outdoor Test Series",
      year: "2026",
      venue: "Cape Town, South Africa",
      dates: "20–24 July 2026",
      source: "Verified via NHU Instagram",
    },
    {
      name: "Outdoor Hockey Umpires Course with Peter Caulder",
      year: "2026",
      venue: "Windhoek, Namibia",
      dates: "5–6 June 2026",
      source: "Verified via NHU Instagram",
    },
    {
      name: "FIH Indoor World Cup 2025",
      year: "2025",
      venue: "TBC",
      dates: "TBC",
      source: "Qualified via 2024 Indoor Africa Cup gold",
    },
  ],

  // Verified venue (per Tavily — Alamy / CCGrass record)
  verifiedVenues: [
    {
      name: "Windhoek High School Stadium",
      city: "Windhoek",
      certification: "FIH Hockey Turf — Category 3 (Certified)",
      surface: "CCGrass FastPro HF 18 EF10",
      note: "Used for outdoor hockey league fixtures and international tests.",
    },
  ],

  // Verified national squads (per Wikipedia — men's indoor squad)
  mensIndoorSquad: {
    headCoach: "Trevor Cormack",
    captain: "David Strauss (GK) / Pieter Jacobs (C)",
    players: [
      "David Strauss (C, GK)",
      "Richter van Rooyen (GK)",
      "Liam Hermanus",
      "David Britz",
      "Fagan Hansen",
      "John-Paul Britz",
      "Cody van der Merwe",
      "Nico Neethling",
      "Dakota Hansen",
      "Pieter Jacobs (C)",
      "Matukaramove Kavikairiua",
      "Brynn Cleak",
    ],
    note: "Indoor Africa Cup 2024 gold-medal squad. Source: Wikipedia.",
  },

  // Verified captains
  nationalCaptains: [
    { team: "Men's indoor", captain: "JP Britz / David Strauss", source: "Wikipedia" },
    { team: "Women's indoor", captain: "Kiana Cormack (withdrew from latest squad)", source: "Wikipedia" },
  ],

  // Verified individual honours
  individualHonours: [
    {
      award: "Men's Goalkeeper of the Tournament",
      recipient: "Richter van Rooyen",
      event: "2024 Indoor Africa Cup",
      source: "Verified via Tavily / NBC Sport NA",
    },
  ],

  // Verified umpires course info (from NHU Instagram via Tavily)
  umpiresCourse: {
    title: "Outdoor Hockey Umpires Course",
    instructor: "Peter Caulder (International Umpire)",
    venue: "Windhoek",
    dates: "5–6 June 2026",
    cost: "N$ 400.00",
    contact: "Maryke Sho",
    eligibility:
      "Open to anyone with basic umpiring experience and a solid, intermediate understanding of the rules of the game.",
    structure:
      "Online Theory Assessment followed by Practical Assessment. Both must be passed for grading.",
  },

  // TBC items - rendered as notices, never fabricated
  tbc: [
    "Founding year of the NHU",
    "Current full outdoor squad lists (men & women)",
    "Full 2026 outdoor fixture list",
    "Club directory details (training times, contacts, locations)",
    "Detailed member-club list across all regions",
    "Logo vector source files",
  ],
};

export const nationalTeams = [
  { slug: "men-senior-outdoor", name: "Men senior outdoor", status: "TBC squad" },
  { slug: "women-senior-outdoor", name: "Women senior outdoor", status: "TBC squad" },
  { slug: "men-senior-indoor", name: "Men senior indoor", status: "Gold — Indoor Africa Cup 2024" },
  { slug: "women-senior-indoor", name: "Women senior indoor", status: "Silver — Indoor Africa Cup 2024" },
  { slug: "men-junior", name: "Men junior", status: "TBC squad" },
  { slug: "women-junior", name: "Women junior", status: "TBC squad" },
];

export const routes = [
  { href: "/fixtures", label: "Fixtures", description: "Upcoming and past matches" },
  { href: "/results", label: "Results", description: "Recent results and logs" },
  { href: "/clubs", label: "Clubs", description: "Find a club directory" },
  { href: "/national-teams", label: "National teams", description: "Squads and selections" },
  { href: "/news", label: "News", description: "Match reports and updates" },
  { href: "/membership", label: "Membership", description: "Player, coach, umpire registration" },
  { href: "/governance", label: "Governance", description: "Constitution, board, policies" },
  { href: "/about", label: "About", description: "About NHU, history, mission" },
  { href: "/contact", label: "Contact", description: "Contact form and details" },
];
