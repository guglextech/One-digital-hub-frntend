export const MATCH_THREE_MENU = [
    {
      title: 'Dashboard',
      link: '/three-picks/dashboard/insight',
      icon: '/assets/icons/feather/grid.svg',
    },
    {
      title: 'Draws',
      icon: '/assets/icons/feather/file-text.svg',
      collapse: true,
      collapseId: 'ui-basic',
      subMenu: [
        { title: 'Active Draws', link: '/three-picks/dashboard/active-draws' },
        { title: 'Past Draws', link: '/three-picks/dashboard/past-draws' },
        { title: 'Awaiting Winning Numbers', link: '/three-picks/dashboard/awaiting-numbers' },
        { title: 'Pending Approvals', link: '/three-picks/dashboard/pending-approvals', adminOnly: true },
      ],
    },
    {
      title: 'Players',
      link: '/three-picks/dashboard/players',
      icon: '/assets/icons/feather/users.svg',
    },
    {
      title: 'Prizes',
      link: '/three-picks/dashboard/prizes',
      icon: '/assets/icons/feather/award.svg',
    },
    {
      title: 'Configure SMS',
      link: '/three-picks/dashboard/configure-sms',
      icon: '/assets/icons/feather/mail.svg',
    },
    {
      title: 'Audit Logs',
      link: '/three-picks/dashboard/logs',
      icon: '/assets/icons/feather/book-open.svg',
    }
  ];
  


export const MATCH_THREE_MENU_PROFILE = [
      {
        label: "Games",
        icon: "mdi mdi-apps text-primary"
      },
      {
        label: "Account settings",
        icon: "mdi mdi-settings text-primary"
      },
      {
        label: "Logout",
        icon: "mdi mdi-onepassword text-info"
    }
];

 