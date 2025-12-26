export const LOVE_TIPS_MENU = [
  {
    title: "Dashboard",
    link: "/love-tips/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/love-tips/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/love-tips/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/love-tips/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/love-tips/subscribers/active" },
      { title: "Inactive", link: "/love-tips/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/love-tips/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

