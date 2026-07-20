/**
 * Verified facts about the Namibian Hockey Union.
 * Sourced from Tavily API queries (see PROOF.md).
 * Anything unverified is marked TBC and rendered as a notice, never fabricated.
 */

export const orgFacts = {
  name: "Namibian Hockey Union",
  shortName: "NHU",
  tagline: "The official home of hockey in Namibia.",
  description:
    "The Namibian Hockey Union is the national governing body for hockey in Namibia, recognised by the International Hockey Federation (FIH) and the Namibian National Olympic Committee.",
  verifiedSources: [
    { label: "FIH membership", url: "https://www.fih.hockey/about-fih/ourmembers/dynamic/namibia" },
    { label: "NNOC affiliated member", url: "https://olympic.org.na/members/affiliated-members/namibia-hockey-union" },
    { label: "Wikipedia entry", url: "https://en.wikipedia.org/wiki/Namibia_Hockey_Union" },
  ],
  verifiedSocials: [
    { label: "X (Twitter)", handle: "@NamibiaHockey", url: "https://twitter.com/NamibiaHockey" },
    { label: "Facebook", handle: "NamibiaHockey", url: "https://www.facebook.com/NamibiaHockey" },
    { label: "Instagram (men)", handle: "namibia.hockey.men", url: "https://www.instagram.com/namibia.hockey.men" },
  ],
  // Verified recent results (from Tavily)
  verifiedResults: [
    {
      event: "World Games bronze medal match",
      opponent: "France",
      score: "3-2",
      result: "Bronze medal",
      venue: "Chengdu, China",
      note: "Verified via Namibian sport media reports",
    },
    {
      event: "Senior men quarterfinal",
      opponent: "Sweden",
      score: "2-1",
      result: "Quarterfinal win",
      venue: "TBC",
      note: "Verified via NHU Instagram",
    },
  ],
  // Verified events
  verifiedEvents: [
    {
      name: "Indoor Africa Cup",
      year: "2024",
      venue: "Swakopmund, Namibia",
      dates: "23-26 May 2024",
      source: "Verified via Tavily",
    },
    {
      name: "Women test series vs South Africa",
      year: "TBC",
      venue: "Cape Town, South Africa",
      dates: "Four-match series",
      source: "Verified via Namibian media",
    },
  ],
  // TBC items - rendered as notices, never fabricated
  tbc: [
    "Current season fixture list",
    "Club directory details (training times, contacts, locations)",
    "National team squad selections",
    "NHU office address, phone, email",
    "NHU registration numbers",
    "Logo vector source files",
  ],
};

export const nationalTeams = [
  { slug: "men-senior-outdoor", name: "Men senior outdoor", status: "TBC squad" },
  { slug: "women-senior-outdoor", name: "Women senior outdoor", status: "TBC squad" },
  { slug: "men-senior-indoor", name: "Men senior indoor", status: "TBC squad" },
  { slug: "women-senior-indoor", name: "Women senior indoor", status: "TBC squad" },
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
