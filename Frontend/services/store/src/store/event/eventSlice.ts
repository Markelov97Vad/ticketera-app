import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { fetchEvents } from './api';
import { IEvent } from '@/types/event';

type EventState = {
  events: IEvent[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | SerializedError;
};

const initialState: EventState = {
  events: [],
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
    addEvents(state, action: PayloadAction<string>) {
      console.log('state', state);
      console.log('action', action);

      state.events.push({
        name: 'testName',
        location: 'testLocation',
        image: 'testImage',
        date: 'testDate',
      });
    },
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
      });
  },
});

// события которые запускают методы
export const { addEvents } = eventSlice.actions;
// функция для изменения состояния store
export default eventSlice.reducer;
