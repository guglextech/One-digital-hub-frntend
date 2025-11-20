export const LOTTO_CHOICE_MENU = [
  {
    title: "Dashboard",
    link: "/lotto-choice/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lotto-choice/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lotto-choice/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lotto-choice/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lotto-choice/subscribers/active" },
      { title: "Inactive", link: "/lotto-choice/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lotto-choice/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
