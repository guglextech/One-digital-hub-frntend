export const SURE_BANKER_MENU = [
  {
    title: "Dashboard",
    link: "/sure-banker/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/sure-banker/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/sure-banker/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/sure-banker/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/sure-banker/subscribers/active" },
      { title: "Inactive", link: "/sure-banker/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/sure-banker/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
