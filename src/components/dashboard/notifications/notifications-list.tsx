'use client';

import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

import type { ColumnDef } from '@/components/core/data-table';
import { DataTable } from '@/components/core/data-table';

import type { Notification } from './interfaces';
import { useNotificationList } from './util';

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
          {row.notificationType}
        </Typography>
      ),
      name: 'Notification Type',
      width: '250px',
    },
    {
      formatter: (row): React.JSX.Element => (
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
          {row.message}
        </Typography>
      ),
      name: 'Message',
      width: '250px',
    },
    {
      formatter: (row): React.JSX.Element => (
        <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
          {dayjs(row.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        </Typography>
      ),
      name: 'Message Created At',
      width: '250px',
    },
  ] satisfies ColumnDef<Notification>[];

export function Notifications(): React.JSX.Element {
  const { items, loading } = useNotificationList();
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
        <DataTable<Notification> columns={columns} hover rows={items} />
      </Box>
    </Box>
  );
}