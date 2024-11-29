'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, CircularProgress, IconButton, Popover, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DotsThree as DotsThreeIcon } from '@phosphor-icons/react/dist/ssr/DotsThree';

import { paths } from '@/paths';
import type { ColumnDef } from '@/components/core/data-table';
import { DataTable } from '@/components/core/data-table';

import type { Preference } from './interfaces';
import { usePreferenceList } from './util';

const getColumns = (handleOpenPopover: (event: React.MouseEvent<HTMLElement>, item: Preference) => void) =>
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
          {row.isEnabled}
        </Typography>
      ),
      name: 'Notification Enabled',
      width: '250px',
    },
    {
      formatter: (row): React.JSX.Element => (
        <IconButton
          onClick={(e) => {
            handleOpenPopover(e, row);
          }}
        >
          <DotsThreeIcon weight="bold" />
        </IconButton>
      ),
      name: 'Actions',
      hideName: true,
      width: '100px',
      align: 'right',
    },
  ] satisfies ColumnDef<Preference>[];

export function Preferences(): React.JSX.Element {
  const { items, loading } = usePreferenceList();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<Preference | null>(null);
  const router = useRouter();

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>, item: Preference) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'story-popover' : undefined;
  const columns = getColumns(handleOpenPopover);

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

  const handleEdit = () => {
    if (selectedItem) {
      router.push(paths.dashboard.preferences.details(selectedItem.id.toString()));
    }
    handleClosePopover();
  };

  return (
    <Box sx={{ my: 3 }}>
      <Box sx={{ overflowX: 'auto' }}>
        <DataTable<Preference> columns={columns} hover rows={items} />
      </Box>

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        id={id}
        onClose={handleClosePopover}
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box>
          <Button fullWidth onClick={handleEdit}>
            Edit
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}