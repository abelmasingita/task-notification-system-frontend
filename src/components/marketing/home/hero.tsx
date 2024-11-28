'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export function Hero(): React.JSX.Element {
  return (
    <Box
      sx={{
        bgcolor: 'var(--mui-palette-neutral-950)',
        color: 'var(--mui-palette-common-white)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 0,
        }}
      >
        <Box component="img" src="/assets/home-cosmic.svg" sx={{ height: 'auto', width: '1600px' }} />
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        <Box component="img" src="/assets/home-rectangles.svg" sx={{ height: 'auto', width: '1900px' }} />
      </Box>
      <Container maxWidth="md" sx={{ position: 'relative', py: '120px', zIndex: 3 }}>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: 1.2, textAlign: 'center' }}>
              Task Notification System
            </Typography>
            <Typography color="neutral.300" sx={{ fontWeight: 400, textAlign: 'center' }} variant="h5">
              Stay updated with real-time notifications whenever a task you are involved with is created, updated or
              completed
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              href="/"
              sx={{
                color: 'var(--mui-palette-common-white)',
                '&:hover': { bgcolor: 'var(--mui-palette-action-hover)' },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
