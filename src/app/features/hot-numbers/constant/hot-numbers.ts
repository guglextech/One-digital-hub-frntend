export const HOT_NUMBERS_MENU = [
  {
    title: "Dashboard",
    link: "/hot-numbers/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/hot-numbers/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
   {
    title: "Payments",
    link: "/hot-numbers/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/hot-numbers/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/hot-numbers/subscribers/active" },
      { title: "Inactive", link: "/hot-numbers/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/hot-numbers/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
