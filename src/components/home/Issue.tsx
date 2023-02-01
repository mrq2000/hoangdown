import useIssue from '@/api/useIssue';
import { LoadingButton } from '@mui/lab';
import { Box, Paper } from '@mui/material';
import React, { FC, useState } from 'react';
import { useSnackbar } from 'notistack';
import DataTable from '../common/DataTable';
import ImportButton from '../common/ImportButton';

const Issue: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const { mutate, isLoading } = useIssue();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    mutate(data, {
      onSuccess: () => {
        setData([]);
      },
      onError: () => {
        enqueueSnackbar('Something Error', {
          variant: 'error',
        });
      },
    });
  };

  return (
    <Paper sx={{ px: 2, py: 3 }}>
      <Box display="flex" flex={1} justifyContent="flex-end">
        {data.length > 0 && (
          <LoadingButton loading={isLoading} onClick={handleClick} variant="outlined" sx={{ mr: 2 }}>
            Select All
          </LoadingButton>
        )}

        <ImportButton setData={setData} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <DataTable rows={data} />
      </Box>
    </Paper>
  );
};

export default Issue;
