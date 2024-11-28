'use client';

import * as React from 'react';

import { useSettings } from '@/hooks/use-settings';

import { VerticalLayout } from './vertical/vertical-layout';

export interface DynamicLayoutProps {
  children: React.ReactNode;
}

export function DynamicLayout({ children }: DynamicLayoutProps): React.JSX.Element {
  const { settings } = useSettings();

  return settings.layout === 'horizontal' ? <>{children}</> : <VerticalLayout>{children}</VerticalLayout>;
}
