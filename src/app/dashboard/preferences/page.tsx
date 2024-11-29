import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



import { config } from '@/config';
import { Preferences } from '@/components/dashboard/preferences/preferece-list';





export const metadata = { title: `List | Preferences | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Box
      sx={{
        maxWidth: 'var(--Content-maxWidth)',
        m: 'var(--Content-margin)',
        p: 'var(--Content-padding)',
        width: 'var(--Content-width)',
      }}
    >
      <Stack spacing={4}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography variant="h4">Preferences</Typography>
          </Box>
        </Stack>
        <Stack spacing={4}>
          <Preferences />
        </Stack>
      </Stack>
    </Box>
  );
}