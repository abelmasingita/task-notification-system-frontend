'use client';

import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';

import type { ColumnDef } from '@/components/core/data-table';
import { DataTable } from '@/components/core/data-table';

import type { Preference } from './interfaces';
import { usePreferenceList } from './util';

const getColumns = () =>
  [
    {
      formatter: (row): React.JSX.Element => (
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
          {row.id}
        </Typography>
      ),
      name: 'Id',
      width: '250px',
    },
    {
      formatter: (row): React.JSX.Element => (
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
          {row.user?.firstname}
        </Typography>
      ),
      name: 'Firt Name',
      width: '250px',
    },
    {
      formatter: (row): React.JSX.Element => (
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
          {row.notification_type}
        </Typography>
      ),
      name: 'Notification Type',
      width: '250px',
    },
    {
      formatter: (row): React.JSX.Element => (
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
          {row.enabled}
        </Typography>
      ),
      name: 'Notification Enabled',
      width: '250px',
    },
  ] satisfies ColumnDef<Preference>[];

export function Preferences(): React.JSX.Element {
  const { items, loading } = usePreferenceList();
  const columns = getColumns();

  if (!items || loading) {
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
    <Box sx={{ my: 3 }}>
      <Box sx={{ overflowX: 'auto' }}>
        <DataTable<Preference> columns={columns} hover rows={items} />
      </Box>
    </Box>
  );
}
