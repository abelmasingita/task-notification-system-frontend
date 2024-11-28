import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';





export interface LayoutConfig {
  navItems: NavItemConfig[];
}

export const layoutConfig = {
  navItems: [
    {
      key: 'dashboards',
      title: 'Notification System',
      items: [
        { key: 'notifications', title: 'Notifications', href: paths.dashboard.notifications, icon: 'house' },
        { key: 'preferences', title: 'Preferences', href: paths.dashboard.preferences, icon: 'chart-pie' },
      ],
    },
  ],
} satisfies LayoutConfig;