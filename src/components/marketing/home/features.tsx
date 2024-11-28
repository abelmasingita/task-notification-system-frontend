import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ListChecks as ListChecksIcon } from '@phosphor-icons/react/dist/ssr/ListChecks';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Warning as WarningIcon } from '@phosphor-icons/react/dist/ssr/Warning';

import { Summary } from '@/components/dashboard/overview/summary';

export function Features(): React.JSX.Element {
  return (
    <Box sx={{ pt: '120px', mb: 2 }}>
      <Stack spacing={8}>
        <Stack maxWidth="700px" sx={{ mx: 'auto', px: 3 }}>
          <Stack spacing={2}>
            <Typography sx={{ textAlign: 'center' }} variant="h3">
              Features
            </Typography>
            <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
              Ready to stay updated? Sign-up now and experience real-time task notification
            </Typography>
          </Stack>
        </Stack>

        <Grid container maxWidth="1000px" spacing={6} sx={{ mx: 'auto', px: 3 }}>
          <Grid item md={4} xs={12}>
            <Summary icon={ListChecksIcon} title="Real-Notifications" />
          </Grid>
          <Grid item md={4} xs={12}>
            <Summary icon={UsersIcon} title="Custom Preference" />
          </Grid>
          <Grid item md={4} xs={12}>
            <Summary icon={WarningIcon} title="Multi-User Support" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
