'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation'; // Adjust this based on your routing library
import { Box, Button, Checkbox, Divider, Stack, Typography } from '@mui/material';

export interface IProps {
  id: string;
}

export function PreferenceDetail({ id }: IProps): React.JSX.Element {
  const [checked, setChecked] = React.useState(false);
  const router = useRouter(); // Hook for navigation

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = () => {
    console.log(`Preference for ID: ${id}, Enabled: ${checked}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Box>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Typography color="text.secondary" variant="body2">
              Update Notification Preference | Subscribe
            </Typography>
          </div>
        </Stack>
        <Divider />
        {/* Checkbox and Submit Button */}
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Checkbox checked={checked} onChange={handleCheckboxChange} sx={{ transform: 'scale(1.5)' }} />
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} variant="h6">
            Enable Notifications
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="primary" onClick={handleSubmit} sx={{ width: '150px', fontSize: '1rem' }} variant="contained">
            Submit
          </Button>
          <Button color="secondary" onClick={handleBack} sx={{ width: '150px', fontSize: '1rem' }} variant="outlined">
            Back
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
