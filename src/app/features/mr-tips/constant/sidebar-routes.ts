export const MR_TIPS_MENU = [
  {
    title: "Dashboard",
    link: "/mr-tips/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/mr-tips/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/mr-tips/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/mr-tips/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/mr-tips/subscribers/active" },
      { title: "Inactive", link: "/mr-tips/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/mr-tips/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
