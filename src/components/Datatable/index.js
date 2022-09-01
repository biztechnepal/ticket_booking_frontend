import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function DataTables({ rows, cols }) {
  return (
    <DataGrid
      rows={rows}
      //   page={page}
      columns={cols}
      getRowId={(row) => row._id}
      // sortingMode='server'
      // sortingOrder={['asc', 'desc']}
      // sortModel = {"desc"}
      // onSortModelChange={(newModel) => {
      //   dispatch(setSortModel(newModel))
      //   dispatch(setPage(0));
      // }}
      // pagination
      pageSize={5}
      rowsPerPageOptions={[2, 3, 4]}
      // rowCount={2}
      // paginationMode="server"
      // onPageChange={(newPage) => dispatch(setPage(newPage))}
      // onPageSizeChange={(newPageSize) => dispatch(setLimit(newPageSize))}
      // loading={loading}
      autoHeight
    />
  );
}

export default DataTables;
