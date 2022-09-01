import { Box, Button, Card, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import DataTables from 'src/components/Datatable';
// import Link from 'src/components/Link';

import { useRefMounted } from 'src/hooks/useRefMounted';

import { useDispatch, useSelector } from 'react-redux';

import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';

import dayjs from 'dayjs';

import { storeBus } from 'src/slices/bus';

const BusTable = () => {
  const isMountedRef = useRefMounted();
  const dispatch = useDispatch();

  const { bus } = useSelector((state) => state.bus);

  const getBus = useCallback(() => {
    try {
      axiosClient.get(urls.API_BUS).then((res) => {
        const { success, bus } = res.data;

        if (success) {
          dispatch(storeBus(bus));
        }
      });
    } catch (err) {
      console.log('customer err', err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getBus();
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 2 },
    {
      field: 'vendor_id',
      headerName: 'Vendor name',
      flex: 2,
      sortable: false,
      renderCell: (params) => <p>{params.row.vendor_id.name}</p>
    },
    {
      field: 'vendor_id1',
      headerName: 'Vendor phone',
      flex: 2,
      sortable: false,
      renderCell: (params) => <p>{params.row.vendor_id.phone}</p>
    },
    { field: 'bus_number', headerName: 'Bus number', flex: 2, sortable: false },
    {
      field: 'createdAt',
      flex: 1,
      headerName: 'Added Date',
      flex: 2,
      renderCell: (params) => (
        <>
          <p>{dayjs(params.row.createdAt).format('YYYY-MM-DD')}</p>
        </>
      )
    },
    { field: 'max_row', headerName: 'Max. rows', flex: 1, sortable: false },
    { field: 'max_col', headerName: 'Max. col.', flex: 1, sortable: false }
  ];
  return (
    <>
      <Card>
        <Box display="flex" alignItems="center">
          <DataTables rows={bus} cols={columns} />
        </Box>
        <Divider />
      </Card>
    </>
  );
};

BusTable.propTypes = {
  products: PropTypes.array.isRequired
};

BusTable.defaultProps = {
  products: []
};

export default BusTable;
