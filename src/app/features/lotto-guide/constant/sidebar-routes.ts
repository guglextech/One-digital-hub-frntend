export const LOTTO_GUIDE_MENU = [
  {
    title: "Dashboard",
    link: "/lotto-guide/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lotto-guide/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lotto-guide/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lotto-guide/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lotto-guide/subscribers/active" },
      { title: "Inactive", link: "/lotto-guide/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lotto-guide/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
