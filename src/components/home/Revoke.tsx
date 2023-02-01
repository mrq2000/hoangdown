import useRevoke from '@/api/useRevoke';
import { Box, Paper } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { FC, useEffect, useState } from 'react';
import DataTable from '../common/DataTable';
import ImportButton from '../common/ImportButton';

const Revoke: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [dataSelected, setDataSelected] = useState<any>(null);
  const { mutate: revoke } = useRevoke();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (dataSelected?.id) {
      revoke(dataSelected, {
        onSuccess: () => {
          const newData = data.filter((data) => data?.id && data.id == dataSelected.id);
          setData(newData);
          setDataSelected(null);
        },
        onError: () => {
          setDataSelected(null);
          enqueueSnackbar('Revoke Error', {
            variant: 'error',
          });
        },
      });
    }
  }, [dataSelected?.id]);

  return (
    <Paper sx={{ px: 2, py: 3 }}>
      <Box display="flex" flex={1} justifyContent="flex-end">
        <ImportButton setData={setData} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <DataTable rows={data} btnTitle="Revoke" dataSelected={dataSelected} setDataSelected={setDataSelected} />
      </Box>
    </Paper>
  );
};

export default Revoke;
