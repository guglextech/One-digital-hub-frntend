export const LOTTO_BIBLE_MENU = [
  {
    title: "Dashboard",
    link: "/lotto-bible/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lotto-bible/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lotto-bible/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lotto-bible/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lotto-bible/subscribers/active" },
      { title: "Inactive", link: "/lotto-bible/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lotto-bible/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
