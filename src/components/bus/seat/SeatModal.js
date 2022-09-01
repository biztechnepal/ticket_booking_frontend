import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';
import { useDispatch } from 'react-redux';
import { addSeat, editSeat, removeSeat } from 'src/slices/seat';
import TextField from '@mui/material/TextField';
import { Popover, Typography } from '@mui/material';

import { Button } from '@mui/material';

const SeatModal = ({
  data,
  open,
  onClose,
  handleChange,
  seatNameError,
  seatErr,
  ref,
  seatName,
  _id,
  mode
}) => {
  const handleSeatName = async (data) => {
    await axiosClient
      .post(urls.API_SEATS + `/${_id}`, {
        seat_name: seatName,
        row: data.row,
        col: data.col
      })
      .then((res) => {
        const { success, seat } = res.data;

        if (success) {
          dispatch(addSeat(seat));

          //dispatch(updateSeat({ seat: data, seatName }));
          onClose();
        }
      })
      .catch((err) => {
        console.log('seat errors', err);

        // const { seat_name } = err.response.data.errors;

        // if (seat_name) {
        //   setSeatErr(seat_name);
        // }
      });
  };

  const handleUpdateSeat = async (data) => {
    await axiosClient
      .put(urls.API_SEATS + `/${data._id}`, {
        seat_name: seatName,
        row: data.row,
        col: data.col
      })
      .then((res) => {
        console.log('seat update', res.data);

        const { success, seat } = res.data;

        if (success) {
          dispatch(editSeat(seat));
          onClose();
        }
      })
      .catch((err) => {
        console.log('edit err', err);
      });
  };

  const handleDeleteSeat = async (data) => {
    console.log('del', data);

    await axiosClient.delete(urls.API_SEATS + `/${data._id}`).then((res) => {
      const { success } = res.data;

      if (success) {
        dispatch(removeSeat(data._id));
      }
    });
  };

  const dispatch = useDispatch();

  return (
    <Popover
      disableScrollLock
      open={open}
      anchorEl={ref}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center'
      }}
      onClose={onClose}
    >
      <div
        style={{
          padding: 20,
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Enter the seat name
        </Typography>
        <TextField
          error={seatNameError || seatErr ? true : false}
          value={seatName}
          onChange={(e) => handleChange(e.target.value)}
          label="Seat name"
          style={{ marginTop: 20 }}
        ></TextField>

        {seatNameError && (
          <Typography style={{ marginTop: 10, color: 'red' }}>
            {seatNameError}
          </Typography>
        )}

        {seatErr && (
          <Typography style={{ marginTop: 10, color: 'red' }}>
            {seatErr}
          </Typography>
        )}

        <Typography style={{ marginTop: 10 }}>
          Row: <span>{data.row}</span> Column: {data.id}
        </Typography>

        <div
          style={{
            marginTop: 10,
            flexDirection: 'row'
          }}
        >
          <Button
            onClick={
              data?.seat_name
                ? () => handleUpdateSeat(data)
                : () => handleSeatName(data)
            }
            variant="contained"
            disableElevation
            style={{ marginRight: 10 }}
          >
            {data?.seat_name ? 'Update seat' : 'Add seat'}
          </Button>
          {/* <Button
          onClick={() => {
            setSeatName('');
          }}
          variant="outlined"
          disableElevation
        >
          Clear seat name
        </Button> */}
        </div>
        {data?.seat_name && (
          <Button
            onClick={() => {
              handleDeleteSeat(data);
              onClose();
            }}
            style={{ marginTop: 10 }}
            disableElevation
          >
            Delete
          </Button>
        )}
      </div>
    </Popover>
  );
};

export default SeatModal;
