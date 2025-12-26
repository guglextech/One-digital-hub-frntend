// Sports - Daily Odds Forecasts
const SPORTS_ODDS_PRODUCTS = [
  {
    gameId: 1,
    gameName: "King Solomon",
    gameRoute: "/king-solomon/dashboard",
    gameIcon: "bi bi-trophy",
    gameDescription: "Sports Daily Odds Forecasts",
    gameShortcode: "*713*22#",
    gameRouteJoined: "king-solomon",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 2,
    gameName: "Odds Oracle",
    gameRoute: "/odds-oracle/dashboard",
    gameIcon: "bi bi-graph-up-arrow",
    gameDescription: "Sports News & Match Insights",
    gameShortcode: "*713*22#",
    gameRouteJoined: "odds-oracle",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 3,
    gameName: "Sportaga",
    gameRoute: "/sportaga/dashboard",
    gameIcon: "bi bi-circle-fill",
    gameDescription: "Daily sports picks and slips",
    gameShortcode: "*713*22#",
    gameRouteJoined: "sportaga",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 4,
    gameName: "Husky Odds",
    gameRoute: "/husky-odds/dashboard",
    gameIcon: "bi bi-dice-6",
    gameDescription: "Daily sports odds forecasts",
    gameShortcode: "*713*22#",
    gameRouteJoined: "husky-odds",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 5,
    gameName: "Bet Lord",
    gameRoute: "/bet-lord/dashboard",
    gameIcon: "bi bi-cash-coin",
    gameDescription: "Daily sports betting tips",
    gameShortcode: "*713*22#",
    gameRouteJoined: "bet-lord",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
];

// Sports News & Match Insights
const SPORTS_NEWS_PRODUCTS = [
  {
    gameId: 6,
    gameName: "Flashscore",
    gameRoute: "/flashscore/dashboard",
    gameIcon: "bi bi-newspaper",
    gameDescription: "Daily sports news insights",
    gameShortcode: "*713*22#",
    gameRouteJoined: "flashscore",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 7,
    gameName: "Topmatches",
    gameRoute: "/topmatches/dashboard",
    gameIcon: "bi bi-star-fill",
    gameDescription: "Daily sports match insights",
    gameShortcode: "*713*22#",
    gameRouteJoined: "topmatches",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
];

// Finance & Business
const FINANCE_PRODUCTS = [
  {
    gameId: 8,
    gameName: "Financepro",
    gameRoute: "/financepro/dashboard",
    gameIcon: "bi bi-pie-chart",
    gameDescription: "Daily money tips & business insights",
    gameShortcode: "*713*22#",
    gameRouteJoined: "financepro",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 9,
    gameName: "Cashflow",
    gameRoute: "/cashflow/dashboard",
    gameIcon: "bi bi-wallet2",
    gameDescription: "Daily money tips & business insights",
    gameShortcode: "*713*22#",
    gameRouteJoined: "cashflow",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 10,
    gameName: "Businesskey",
    gameRoute: "/businesskey/dashboard",
    gameIcon: "bi bi-key",
    gameDescription: "Daily money tips & business insights",
    gameShortcode: "*713*22#",
    gameRouteJoined: "businesskey",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
];

// Love & Relationship
const LOVE_RELATIONSHIP_PRODUCTS = [
  {
    gameId: 11,
    gameName: "Lovetips",
    gameRoute: "/love-tips/dashboard",
    gameIcon: "bi bi-heart-fill",
    gameDescription: "Daily love, dating, relationship tips",
    gameShortcode: "*713*22#",
    gameRouteJoined: "lovetips",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 12,
    gameName: "Heartwise",
    gameRoute: "/heartwise/dashboard",
    gameIcon: "bi bi-heart",
    gameDescription: "Daily love, dating, relationship tips",
    gameShortcode: "*713*22#",
    gameRouteJoined: "heartwise",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
];

// Job Alerts
const JOB_ALERTS_PRODUCTS = [
  {
    gameId: 13,
    gameName: "Jobconnect",
    gameRoute: "/jobconnect/dashboard",
    gameIcon: "bi bi-diagram-3",
    gameDescription: "Daily job alerts",
    gameShortcode: "*713*22#",
    gameRouteJoined: "jobconnect",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
  {
    gameId: 14,
    gameName: "Jobsalert",
    gameRoute: "/jobsalert/dashboard",
    gameIcon: "bi bi-bell",
    gameDescription: "Daily job alerts",
    gameShortcode: "*713*22#",
    gameRouteJoined: "jobsalert",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
];

// Scholarships
const SCHOLARSHIP_PRODUCTS = [
  {
    gameId: 15,
    gameName: "Scholarship",
    gameRoute: "/scholarship/dashboard",
    gameIcon: "bi bi-mortarboard",
    gameDescription: "Scholarship alerts for US, UK, Canda, Ghana and China",
    gameShortcode: "*713*22#",
    gameRouteJoined: "scholarship",
    tag: "Active",
    gameImage: "../assets/images/games-icons/app.png",
  },
];

// Combined product list
export const PRODUCTS_NAME = [
  ...SPORTS_ODDS_PRODUCTS,
  ...SPORTS_NEWS_PRODUCTS,
  ...FINANCE_PRODUCTS,
  ...LOVE_RELATIONSHIP_PRODUCTS,
  ...JOB_ALERTS_PRODUCTS,
  ...SCHOLARSHIP_PRODUCTS,
];

// Grouped products by category
export const PRODUCTS_BY_CATEGORY = [
  { title: "Sports - Daily Odds Forecasts", products: SPORTS_ODDS_PRODUCTS },
  { title: "Sports News & Match Insights", products: SPORTS_NEWS_PRODUCTS },
  { title: "Finance & Business", products: FINANCE_PRODUCTS },
  { title: "Love & Relationship", products: LOVE_RELATIONSHIP_PRODUCTS },
  { title: "Job Alerts", products: JOB_ALERTS_PRODUCTS },
  { title: "Scholarships", products: SCHOLARSHIP_PRODUCTS },
].filter(category => category.products.length > 0);
