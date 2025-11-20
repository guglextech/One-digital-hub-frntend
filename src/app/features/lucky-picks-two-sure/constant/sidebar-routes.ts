export const  LUCKY_PICK_TWO_SURE_MENU = [
  {
    title: "Dashboard",
    link: "/lucky-picks-two-sure/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/lucky-picks-two-sure/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/lucky-picks-two-sure/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/lucky-picks-two-sure/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/lucky-picks-two-sure/subscribers/active" },
      { title: "Inactive", link: "/lucky-picks-two-sure/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/lucky-picks-two-sure/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
