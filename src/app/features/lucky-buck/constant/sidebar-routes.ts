export const LUCKY_BUCK_MENU = [
  {
    title: "Dashboard",
    link: "/lucky-buck/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lucky-buck/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lucky-buck/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lucky-buck/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lucky-buck/subscribers/active" },
      { title: "Inactive", link: "/lucky-buck/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lucky-buck/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
