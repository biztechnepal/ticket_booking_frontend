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

import { ImTicket } from 'react-icons/im';

import { MdOutlineEventSeat } from 'react-icons/md';

import Link from 'next/link';
import { storeBusSchedule } from 'src/slices/bus_schedule';

const BusScheduleTable = () => {
  const isMountedRef = useRefMounted();
  const dispatch = useDispatch();

  const { bus_schedule } = useSelector((state) => state.bus_schedule);

  const getBusSchedules = useCallback(() => {
    try {
      axiosClient
        .get(urls.API_BUS_SCHEDULE_VENDOR)
        .then((res) => {
          const { success, bus_schedule } = res.data;

          if (success) {
            dispatch(storeBusSchedule(bus_schedule));
          }
        })
        .catch((err) => {
          console.log('bus schedule error', err);
        });
    } catch (err) {
      console.log('bus schedule error', err.response.data);
    }
  }, [isMountedRef]);

  useEffect(() => {
    //getBus();

    getBusSchedules();
  }, []);

  const columns = [
    {
      field: 'bus_id',
      headerName: 'Bus name',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{params.row.bus_id.name}</p>
        </>
      )
    },
    {
      field: 'date',
      flex: 1,
      headerName: 'Departure Date',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{dayjs(params.row.date).format('DD MMM YYYY')}</p>
        </>
      )
    },
    {
      field: 'time',
      flex: 1,
      headerName: 'Departure time',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{params.row.time}</p>
        </>
      )
    },
    {
      field: 'destination_from',
      flex: 1,
      headerName: 'From',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{params.row.destination_from.destination_name}</p>
        </>
      )
    },
    {
      field: 'destination_to',
      flex: 1,
      headerName: 'To',
      flex: 1,
      renderCell: (params) => (
        <>
          <p>{params.row.destination_to.destination_name}</p>
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
            <Link href={'bus-schedule/tickets/' + params.row._id}>
              <Button color="warning">
                {' '}
                <ImTicket />{' '}
              </Button>
            </Link>
          </>
        );
      }
    }
  ];
  return (
    <>
      <Card>
        <Box display="flex" alignItems="center">
          <DataTables rows={bus_schedule} cols={columns} />
        </Box>
        <Divider />
      </Card>
    </>
  );
};

BusScheduleTable.propTypes = {
  products: PropTypes.array.isRequired
};

BusScheduleTable.defaultProps = {
  products: []
};

export default BusScheduleTable;
