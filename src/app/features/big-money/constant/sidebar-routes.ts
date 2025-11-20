export const BIG_MONEY_MENU = [
  {
    title: "Dashboard",
    link: "/big-money/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/big-money/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
   {
    title: "Payments",
    link: "/big-money/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/big-money/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/big-money/subscribers/active" },
      { title: "Inactive", link: "/big-money/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/big-money/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
