import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { fetchEvents, getCurrentEvent } from './api';
import { IEvent } from '@/models/event';
import { IEventTicket, ITicket } from '@/models/ticket';

type EventState = {
  events: IEvent[];
  currentEvent: IEvent;
  // tickets: ITicket[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | SerializedError;
};

const initialState: EventState = {
  events: [],
  currentEvent: undefined,
  // tickets: [],
  loading: 'idle',
  error: null,
};

const eventSlice = createSlice({
  name: 'event',
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
    // addTickets(state, action: PayloadAction<ITicket[]>) {
    //   state.tickets = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      })
      .addCase(getCurrentEvent.pending, state => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getCurrentEvent.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        console.log(action.payload);

        state.currentEvent = action.payload;
      })
      .addCase(getCurrentEvent.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      });
  },
});

// события которые запускают методы
// export const { addTickets } = eventSlice.actions;
// функция для изменения состояния store
export default eventSlice.reducer;
