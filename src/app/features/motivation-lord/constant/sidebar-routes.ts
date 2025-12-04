export const MOTIVATION_MENU = [
  {
    title: "Dashboard",
    link: "/motivation-lord/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/motivation-lord/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/motivation-lord/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/motivation-lord/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/motivation-lord/subscribers/active" },
      { title: "Inactive", link: "/motivation-lord/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/motivation-lord/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

