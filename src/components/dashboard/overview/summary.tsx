import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';

export interface SummaryProps {
  icon: Icon;
  title: string;
}

export function Summary({ icon: Icon, title }: SummaryProps): React.JSX.Element {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
          <Avatar
            sx={{
              '--Avatar-size': '48px',
              bgcolor: 'var(--mui-palette-background-paper)',
              boxShadow: 'var(--mui-shadows-8)',
              color: 'var(--mui-palette-text-primary)',
            }}
          >
            <Icon fontSize="var(--icon-fontSize-lg)" />
          </Avatar>
          <div>
            <Typography color="text.secondary" variant="body1">
              {title}
            </Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
