export const LOTTO_KEYS_MENU = [
  {
    title: "Dashboard",
    link: "/lotto-key-plus/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lotto-key-plus/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lotto-key-plus/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lotto-key-plus/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lotto-key-plus/subscribers/active" },
      { title: "Inactive", link: "/lotto-key-plus/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lotto-key-plus/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
