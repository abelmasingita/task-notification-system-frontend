'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { NotificationType } from '@/utils/notificationtype';
import { Box, Button, Checkbox, CircularProgress, Divider, Stack, Typography } from '@mui/material';

import { useAlerts } from '@/hooks/use-alerts';

import type { UpdatePreference } from './interfaces';
import { usePreference } from './util';

export interface IProps {
  id: string;
}

export function PreferenceDetail({ id }: IProps): React.JSX.Element {
  const { fetchById, item, loading, update } = usePreference();
  const [checked, setChecked] = React.useState(false);
  const router = useRouter(); // Hook for navigation
  const { toast: alert } = useAlerts();

  React.useEffect(() => {
    if (id) {
      void fetchById(id);
    }
  }, [id]);

  React.useEffect(() => {
    if (item && checked !== item.isEnabled) {
      setChecked(item.isEnabled);
    }
  }, [item]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (!item) {
      alert('Error', 'No item found to update.', 'error');
      return;
    }

    const data: UpdatePreference = {
      notificationType: item?.notificationType || NotificationType.TASKASSIGNED,
      isEnabled: checked ?? false,
    };
    void update(data);
    router.back();
  };

  const handleBack = () => {
    router.back();
  };
  if (!item || loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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