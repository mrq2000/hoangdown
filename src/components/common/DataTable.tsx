import React, { FC, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface DataTableProps {
  rows: any[];
  btnTitle?: string;
  dataSelected?: any;
  setDataSelected?: (data: any) => void;
}

const DataTable: FC<DataTableProps> = ({ rows, btnTitle, dataSelected, setDataSelected }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ms</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Parent Department</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
              <TableRow key={row.stt} hover>
                <TableCell component="th" scope="row">
                  {row.STT}
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.ms}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.parentName}</TableCell>
                <TableCell align="right">
                  {setDataSelected && (
                    <LoadingButton
                      loading={dataSelected?.id == row.id}
                      disabled={dataSelected && dataSelected?.id != row.id}
                      onClick={() => setDataSelected(row)}
                      variant="outlined"
                    >
                      {btnTitle}
                    </LoadingButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {rows.length == 0 && (
        <Box display="flex" flex={1} justifyContent="center" my={5}>
          No Data
        </Box>
      )}

      <Box display="flex" flex={1} justifyContent="flex-end">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
};

export default DataTable;
