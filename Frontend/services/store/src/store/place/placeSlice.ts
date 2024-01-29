import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { ITicket } from '@/models/ticket';
import { IOrder, IZone } from '@/models/place';

type EventState = {
  // events: IEvent[];
  // currentEvent: IEvent;
  order: IOrder;
  isOpen: boolean;
  tickets: ITicket[];
  paymentData: IZone[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | SerializedError;
};

const initialState: EventState = {
  // events: [],
  // currentEvent: undefined,
  isOpen: false,
  order: undefined,
  tickets: [],
  paymentData: [],
  loading: 'idle',
  error: null,
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  // методы
  reducers: {
    // addEvents(state, action: PayloadAction<string>) {
    //   console.log('state', state);
    //   console.log('action', action);

    //   state.events.push({
    //     id: 1,
    //     text: action.payload,
    //     check: false,
    //   });
    // },
    togglePopup(state) {
      state.isOpen = !state.isOpen;
    },
    addTickets(state, action: PayloadAction<ITicket[]>) {
      state.tickets = action.payload;
    },
    addCurrentEvent(state, action: PayloadAction<ITicket[]>) {
      state.tickets = action.payload;
    },
    addPaymentData(state, action: PayloadAction<IZone>) {
      state.paymentData.push(action.payload);
    },
    patchPaymentData(state, action: PayloadAction<IZone>) {
      console.log('patch');
      
      const { seat, row, name } = action.payload;
      state.paymentData.filter(event => {
        return seat !== event.seat || row !== event.row || name !== event.name;
      });
    },
    deletePaymentData(state, action: PayloadAction<number>) {
      // const {  } = action.payload;
      // return currentEvent.filter((event, index) => {
      //   //     return index !== id;
      //   //   });
      state.paymentData.filter((event, index) => {
        return index !== action.payload;
      });
    },
    clearPaymentData(state) {
      state.paymentData = [];
    },
    addOrder(state, action: PayloadAction<IOrder>) {
      state.order = action.payload;
    },
  },
  // extraReducers: builder => {
  // builder
  // .addCase(fetchEvents.pending, state => {
  //   state.loading = 'pending';
  //   state.error = null;
  // })
  // .addCase(fetchEvents.fulfilled, (state, action) => {
  //   state.loading = 'succeeded';
  //   state.error = null;
  //   state.events = action.payload;
  // })
  // .addCase(fetchEvents.rejected, (state, action) => {
  //   state.loading = 'failed';
  //   state.error = action.error;
  // })
  // },
});

// события которые запускают методы
export const {
  addTickets,
  addCurrentEvent,
  addPaymentData,
  patchPaymentData,
  deletePaymentData,
  clearPaymentData,
  togglePopup,
  addOrder,
} = placeSlice.actions;
// функция для изменения состояния store
export default placeSlice.reducer;
