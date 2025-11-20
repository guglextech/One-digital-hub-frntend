export interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  collapse?: boolean;
  collapseId?: string;
  subMenu?: SubMenuItem[];
  adminOnly?: boolean;
}

export interface SubMenuItem {
  title: string;
  link: string;
  adminOnly?: boolean;
}

export interface ProfileMenuItem {
  label: string;
  icon: string;
  link: string;
}
