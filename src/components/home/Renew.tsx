import useRenew from '@/api/useRenew';
import { useSnackbar } from 'notistack';
import { Box, Paper } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import DataTable from '../common/DataTable';
import ImportButton from '../common/ImportButton';

const Renew: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [dataSelected, setDataSelected] = useState<any>(null);
  const { mutate: renew } = useRenew();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (dataSelected?.id) {
      renew(dataSelected, {
        onSuccess: () => {
          const newData = data.filter((data) => data?.id && data.id == dataSelected.id);
          setData(newData);
          setDataSelected(null);
        },
        onError: () => {
          setDataSelected(null);
          enqueueSnackbar('Renew Error', {
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
        <DataTable rows={data} btnTitle="Renew" setDataSelected={setDataSelected} dataSelected={dataSelected} />
      </Box>
    </Paper>
  );
};

export default Renew;
