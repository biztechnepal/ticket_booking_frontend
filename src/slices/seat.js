import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  seats: [],
  seatNameError: '',
  selectedSeats: [],
  api_seats: [],
  viewable_seats: [],
  api_tickets: []
};

const seatSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    storeSeats: (state, { payload }) => {
      state.seats = payload;

      state.seats.map((item, index) => {
        state.api_seats.map((e, index) => {
          if (e?.row === item?.row && e?.col === item?.col) {
            item.is_selected = true;
            item.seat_name = e?.seat_name;
            item._id = e?._id;
          }
        });
      });
    },
    storeAPISeats: (state, { payload }) => {
      state.api_seats = payload;
    },
    storeViewableSeats: (state, { payload }) => {
      state.viewable_seats = payload;

      state.viewable_seats.map((seat) => {
        state.api_tickets.map((ticket) => {
          if (
            seat.seat_name === ticket.seat_id.seat_name &&
            seat.row === ticket.seat_id.row &&
            seat.col === ticket.seat_id.col
          ) {
            seat.isBooked = true;
          }
        });
      });
    },
    storeAPITickets: (state, { payload }) => {
      state.api_tickets = payload;
    },
    addSeat: (state, { payload }) => {
      const index = state.seats.findIndex(
        (object) => object.row === payload.row && object.col === payload.col
      );

      state.seats[index].is_selected = true;
      state.seats[index].seat_name = payload.seat_name;
      state.seats[index]._id = payload._id;
    },
    updateSeat: (state, { payload }) => {
      let filtered = state.seats.filter(
        (seat) => seat?.seatName === payload.seatName
      );

      if (payload.seatName.length <= 0) {
        state.seatNameError = 'Seat name cannot be empty';
        return;
      }

      if (filtered > 0) {
        state.seatNameError = 'This seat name is already taken';
        return;
      }

      let index = state.seats.findIndex(
        (object) => object.id === payload.seat.id
      );

      state.seats[index] = {
        ...state.seats[index],
        seat_name: payload.seatName,
        is_selected: true
      };

      state.seatNameError = '';
    },
    clearSeatName: (state, { payload }) => {
      let index = state.seats.findIndex((object) => object.id === payload.id);

      delete state.seats[index].seat_name;
      delete state.seats[index].is_selected;
    },
    editSeat: (state, { payload }) => {
      let index = state.seats.findIndex(
        (object) => object?._id === payload._id
      );

      state.seats[index] = { ...state.seats[index], ...payload };
    },
    removeSeat: (state, { payload }) => {
      let index = state.seats.findIndex((object) => object?._id === payload);

      delete state.seats[index].is_selected;
      delete state.seats[index].seat_name;
    }
  }
});

export const {
  storeSeats,
  updateSeat,
  clearSeatName,
  storeAPISeats,
  addSeat,
  editSeat,
  removeSeat,
  storeViewableSeats,
  storeAPITickets
} = seatSlice.actions;

export default seatSlice.reducer;
