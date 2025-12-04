export const LOVE_RELATIONSHIPS_MENU = [
  {
    title: "Dashboard",
    link: "/love-relationships-lord/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/love-relationships-lord/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/love-relationships-lord/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/love-relationships-lord/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/love-relationships-lord/subscribers/active" },
      { title: "Inactive", link: "/love-relationships-lord/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/love-relationships-lord/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

