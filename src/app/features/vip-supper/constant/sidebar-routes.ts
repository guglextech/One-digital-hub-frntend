export const VIP_SUPER_MENU = [
  {
    title: "Dashboard",
    link: "/vip-super/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/vip-super/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/vip-super/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/vip-super/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/vip-super/subscribers/active" },
      { title: "Inactive", link: "/vip-super/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/vip-super/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
