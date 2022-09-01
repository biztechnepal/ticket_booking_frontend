import { useEffect, useState } from 'react';
import axiosClient from 'src/utils/axios-client';
import urls from 'src/utils/urls';

import { useDispatch, useSelector } from 'react-redux';
import {
  storeAPISeats,
  storeAPITickets,
  storeSeats,
  storeViewableSeats
} from 'src/slices/seat';

import { useRef } from 'react';

import SeatModal from 'src/components/bus/seat/SeatModal';

const Deck = (props) => {
  const { mode, _id } = props;

  const dispatch = useDispatch();

  useEffect(async () => {
    if (mode === 'Editable') {
      storeBusSeats();
    } else if (mode === 'Viewable') {
      fetchTickets();
    }
    fetchAPISeats();
  }, []);

  const fetchAPISeats = async () => {
    if (mode === 'Editable') {
      await axiosClient
        .get(urls.API_SEATS + `/${_id}`)
        .then((res) => {
          const { success, seat } = res.data;

          if (success) {
            dispatch(storeAPISeats(seat));
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else if (mode === 'Viewable') {
      await axiosClient
        .get(urls.API_SEATS + `/tickets/${_id}`)
        .then((res) => {
          const { success, seat } = res.data;

          if (success) {
            dispatch(storeViewableSeats(seat));
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  };

  const storeBusSeats = async () => {
    await axiosClient
      .get(urls.API_BUS + `/${_id}`)
      .then((res) => {
        const { success, bus } = res.data;

        if (success) {
          let temp_seat = [];

          let k = 1;

          for (let i = 0; i < bus.max_row; i++) {
            for (let j = 0; j < bus.max_col; j++) {
              temp_seat.push({
                //seat_name: letters[j] + (i + 1),
                row: i + 1,
                col: j + 1,
                id: k
              });

              k++;
            }
          }

          dispatch(storeSeats(temp_seat));
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const fetchTickets = async () => {
    await axiosClient
      .get(urls.API_TICKET + `/${_id}`)
      .then((res) => {
        const { success, ticket } = res.data;

        if (success) {
          dispatch(storeAPITickets(ticket));
        }
      })
      .catch((err) => {
        console.log('ticket err', err);
      });
  };

  const ref = useRef(null);

  const Seat = (props) => {
    const color = props?.isBooked
      ? '#FE5F55'
      : props?.is_selected
      ? '#499167'
      : '#5160DD';
    const style = {
      cursor: mode === 'Editable' ? 'pointer' : '',
      position: 'absolute',
      backgroundColor: color,
      left: `${props.col * 4}em`,
      top: `${props.row * 3.8}em`,
      color: 'white',
      width: 40,
      height: 45,
      marginTop: 5,

      textAlign: 'center'
    };

    return (
      <div
        ref={ref}
        className="seat"
        style={style}
        onClick={props.onHandleSeat}
      >
        <p>{props?.seat_name ? props?.seat_name : ''}</p>
      </div>
    );
  };

  const [open, setOpen] = useState(false);

  const [data, setData] = useState({});

  const openPopOver = (seat) => {
    if (seat?.seat_name) {
      setSeatName(seat.seat_name);
    }

    setData(seat);
    setOpen(true);
  };

  const displaySeats = (seatList) => {
    return (
      <div>
        {seatList.map((seat) => (
          <>
            <Seat
              seat_name={seat?.seat_name}
              row={seat?.row}
              col={seat?.col}
              is_selected={seat?.is_selected}
              isBooked={seat?.isBooked}
              availability={seat.status}
              onHandleSeat={() => openPopOver(seat)}
            />
          </>
        ))}
      </div>
    );
  };

  const width = 2;
  const length = 30;
  const { seatNameError, seats, viewable_seats } = useSelector(
    (state) => state.seat
  );
  const seatList = mode === 'Editable' ? seats : viewable_seats;

  const [seatName, setSeatName] = useState('');

  const [seatErr, setSeatErr] = useState('');

  return (
    <>
      {mode === 'Editable' && (
        <SeatModal
          open={open}
          onClose={() => {
            setOpen(false);
            setSeatName('');
            setSeatErr('');
          }}
          data={data}
          handleChange={(value) => setSeatName(value)}
          seatNameError={seatNameError}
          seatErr={seatErr}
          ref={ref}
          seatName={seatName}
          _id={_id}
          mode={mode}
        />
      )}

      <div
        id="deck"
        style={{
          width: `${width * 2.2}em`,
          height: `${length * 2.1}em`
        }}
      >
        {displaySeats(seatList)}
      </div>
    </>
  );
};

export default Deck;
