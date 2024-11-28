import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { DynamicLogo } from '@/components/core/logo';

export function Footer(): React.JSX.Element {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'var(--mui-palette-background-default)',
        borderTop: '1px solid var(--mui-palette-divider)',
        pb: 6,
        pt: { md: 15, xs: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid md={3} sm={4} sx={{ order: { xs: 4, md: 1 } }} xs={12}>
            <Stack spacing={1}>
              <DynamicLogo colorDark="light" colorLight="dark" height={32} width={122} />
              <Typography color="text.secondary" variant="caption">
                © 2024 DataCentrix - Task Notification System
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Typography color="text.secondary" variant="caption">
          All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
