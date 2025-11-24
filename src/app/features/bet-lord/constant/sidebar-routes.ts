export const BIG_MONEY_MENU = [
  {
    title: "Dashboard",
    link: "/bet-lord/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/bet-lord/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
   {
    title: "Payments",
    link: "/bet-lord/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/bet-lord/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/bet-lord/subscribers/active" },
      { title: "Inactive", link: "/bet-lord/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/bet-lord/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
