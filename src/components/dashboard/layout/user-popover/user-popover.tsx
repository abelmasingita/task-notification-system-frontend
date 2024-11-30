'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';



import { config } from '@/config';
import { AuthStrategy } from '@/lib/auth/strategy';
import { useAuthenticate } from '@/components/auth/custom/util';

import { CustomSignOut } from './custom-sign-out';

export interface UserPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open: boolean;
}

export function UserPopover({ anchorEl, onClose, open }: UserPopoverProps): React.JSX.Element {
  const { getUser, user } = useAuthenticate();

  React.useEffect(() => {
    return void getUser();
  }, []);
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      onClose={onClose}
      open={Boolean(open)}
      slotProps={{ paper: { sx: { width: '280px' } } }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Box sx={{ p: 2 }}>
        <Typography>{user?.username}</Typography>
        <Typography color="text.secondary" variant="body2">
          {user?.email}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>{config.auth.strategy === AuthStrategy.CUSTOM ? <CustomSignOut /> : null}</Box>
    </Popover>
  );
}