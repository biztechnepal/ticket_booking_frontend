export const seatMap = {
  data: [
    {
      decks: [
        {
          config: {
            width: 7,
            length: 30,
            startseatRow: 14,
            endSeatRow: 38,
            startWingsRow: 14,
            endWingsRow: 24,
            startWingsX: 1,
            endWingsX: 11,
            exitRowsX: [13, 29]
          },
          seats: [
            {
              seat_name: '14A',
              status: 'AVAILABLE',
              row: 1,
              column: 0
            },
            {
              seat_name: '14B',
              status: 'AVAILABLE',
              row: 1,
              column: 1
            },
            {
              seat_name: '14C',
              status: 'BLocked',
              row: 2,
              column: 2
            }
          ]
        }
      ]
    }
  ]
};
