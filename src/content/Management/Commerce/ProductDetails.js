import { Box, Button, Card, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import DataTables from 'src/components/Datatable';
// import Link from 'src/components/Link';
import Link from 'next/link';

import { useRefMounted } from 'src/hooks/useRefMounted';

import { useDispatch, useSelector } from 'react-redux';
import { customConfirm } from 'src/_partials/Confirm';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import { storeVendor } from 'src/slices/vendor';

import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

import dayjs from 'dayjs';

const ProductDetails = () => {
  const isMountedRef = useRefMounted();
  const dispatch = useDispatch();

  const { vendors } = useSelector((state) => state.vendor);

  const getVendor = useCallback(() => {
    try {
      axiosClient.get(urls.API_GET_VENDOR).then((res) => {
        const { vendors, success } = res.data;

        if (success) {
          dispatch(storeVendor(vendors));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getVendor();
  }, []);

  const handleConfirmDelete = () => {
    customConfirm({
      title: 'Confirmation',
      css: 'danger',
      desc: 'Proceed to delete product ?',
      onYesAction: () => dispatch(mw_ReserveSeat({ show, seats: mySeats }))
    });
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1, sortable: false },
    { field: 'email', headerName: 'Email', flex: 1, sortable: false },
    { field: 'owner_name', flex: 1, headerName: 'Owner name' },
    { field: 'pan_number', flex: 1, headerName: 'Pan number', flex: 1 },
    {
      field: 'is_verified',
      flex: 1,
      headerName: 'Is verified?',
      renderCell: (params) => (
        <>
          {params.row.is_verified ? (
            <TiTick color="#0CB911" size={25} />
          ) : (
            <ImCross color="#E11317" />
          )}
        </>
      )
    },
    {
      field: 'is_active',
      flex: 1,
      headerName: 'Is active?',
      renderCell: (params) => (
        <>
          {params.row.is_active ? (
            <TiTick color="#0CB911" size={25} />
          ) : (
            <ImCross color="#E11317" />
          )}
        </>
      )
    },
    {
      field: 'createdAt',
      flex: 1,
      headerName: 'Added Date',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{dayjs(params.row.createdAt).format('YYYY-MM-DD')}</p>
        </>
      )
    },

    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link href={'products/update/' + params.row._id}>
              <Button color="warning">
                {' '}
                <FaPencilAlt />{' '}
              </Button>
            </Link>
            {/* <Button
              color="error"
              onClick={() => handleConfirmDelete(params.row.id)}
            >
              {' '}
              <FaTrashAlt />{' '}
            </Button> */}
          </>
        );
      }
    }
  ];
  return (
    <>
      <Card>
        <Box display="flex" alignItems="center">
          <DataTables rows={vendors} cols={columns} />
        </Box>
        <Divider />
      </Card>
    </>
  );
};

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired
};

ProductDetails.defaultProps = {
  products: []
};

export default ProductDetails;
