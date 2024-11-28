import * as React from 'react';

import { AuthStrategy } from '@/lib/auth/strategy';
import { StrategyGuard } from '@/components/auth/strategy-guard';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return <StrategyGuard expected={AuthStrategy.CUSTOM}>{children}</StrategyGuard>;
}
