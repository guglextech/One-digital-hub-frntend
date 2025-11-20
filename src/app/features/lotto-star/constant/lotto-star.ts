export const LOTTO_STAR_MENU = [
  {
    title: "Dashboard",
    link: "/lotto-star/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lotto-star/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lotto-star/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lotto-star/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lotto-star/subscribers/active" },
      { title: "Inactive", link: "/lotto-star/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lotto-star/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
