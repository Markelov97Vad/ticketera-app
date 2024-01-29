import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { fetchEvents, getCurrentEvent } from './api';
import { IEvent } from '@/models/event';

type EventState = {
  events: IEvent[];
  currentEvent: IEvent;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | SerializedError;
};

const initialState: EventState = {
  events: [],
  currentEvent: undefined,
  loading: 'idle',
  error: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
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

// export const { addTickets } = eventSlice.actions;
export default eventSlice.reducer;
