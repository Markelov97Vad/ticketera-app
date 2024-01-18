import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// createSlice
type EventType = {
  id: number;
  text: string;
  check: boolean;
};

type EventState = {
  events: EventType[];
};

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  // методы
  reducers: {
    addEvents(state, action: PayloadAction<string>) {
      console.log('state', state);
      console.log('action', action);

      state.events.push({
        id: 1,
        text: action.payload,
        check: false,
      });
    },
  },
});

// события которые запускают методы
export const { addEvents } = eventSlice.actions;
// функция для изменения состояния store
export default eventSlice.reducer;
