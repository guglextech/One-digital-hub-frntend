export const FINANCE_MENU = [
  {
    title: "Dashboard",
    link: "/finance-lord/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/finance-lord/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/finance-lord/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/finance-lord/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/finance-lord/subscribers/active" },
      { title: "Inactive", link: "/finance-lord/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/finance-lord/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

