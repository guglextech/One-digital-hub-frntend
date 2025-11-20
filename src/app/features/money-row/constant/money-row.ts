export const LOTTO_CHART_MENU = [
  {
    title: "Dashboard",
    link: "/money-row/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/money-row/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/money-row/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/money-row/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/money-row/subscribers/active" },
      { title: "Inactive", link: "/money-row/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/money-row/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
