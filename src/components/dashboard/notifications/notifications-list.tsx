'use client';

import React, { useEffect } from 'react';
import { webSocketUrl } from '@/utils/constants';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

import useWebSocket from '@/hooks/use-webscoket';
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
  const { items, setItems, loading } = useNotificationList();
  const columns = getColumns();

  const { notifications, connected } = useWebSocket(webSocketUrl); //to be moved to .env

  useEffect(() => {
    if (connected && notifications.length > 0) {
      //latest notifications to the top of the list, maintaining most recent order
      setItems((prevItems) => {
        return [...notifications, ...prevItems];
      });
    }
  }, [connected, notifications, setItems]);

  if (!items || loading /*|| !connected*/) {
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