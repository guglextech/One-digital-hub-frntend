export const JOBS_MENU = [
  {
    title: "Dashboard",
    link: "/jobs-lord/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/jobs-lord/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/jobs-lord/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/jobs-lord/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/jobs-lord/subscribers/active" },
      { title: "Inactive", link: "/jobs-lord/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/jobs-lord/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

