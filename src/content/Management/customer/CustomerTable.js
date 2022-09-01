import { Box, Button, Card, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import DataTables from 'src/components/Datatable';
// import Link from 'src/components/Link';

import { useRefMounted } from 'src/hooks/useRefMounted';

import { useDispatch, useSelector } from 'react-redux';
import { customConfirm } from 'src/_partials/Confirm';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import { storeVendor } from 'src/slices/vendor';

import dayjs from 'dayjs';
import { storeCustomer } from 'src/slices/customer';

const CustomerTable = () => {
  const isMountedRef = useRefMounted();
  const dispatch = useDispatch();

  const { customers } = useSelector((state) => state.customer);

  const getCustomer = useCallback(() => {
    try {
      axiosClient.get(urls.API_CUSTOMER).then((res) => {
        const { success, customers } = res.data;

        if (success) {
          dispatch(storeCustomer(customers));
        }
      });
    } catch (err) {
      console.log('customer err', err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCustomer();
  }, [isMountedRef]);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1, sortable: false },
    { field: 'email', headerName: 'Email', flex: 1, sortable: false },
    {
      field: 'dob',
      flex: 1,
      headerName: 'Date of birth',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{dayjs(params.row.dob).format('DD MMMM YYYY')}</p>
        </>
      )
    },
    {
      field: 'createdAt',
      flex: 1,
      headerName: 'Registered Date',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{dayjs(params.row.createdAt).format('YYYY-MM-DD')}</p>
        </>
      )
    }
  ];
  return (
    <>
      <Card>
        <Box display="flex" alignItems="center">
          <DataTables rows={customers} cols={columns} />
        </Box>
        <Divider />
      </Card>
    </>
  );
};

CustomerTable.propTypes = {
  products: PropTypes.array.isRequired
};

CustomerTable.defaultProps = {
  products: []
};

export default CustomerTable;
