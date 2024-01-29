import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './event/eventSlice';
import placeSlice from './place/placeSlice';
// хранилище (Store)
export const store = configureStore({
  // подключение в хранилище
  reducer: {
    event: eventReducer,
    place: placeSlice,
  },
});
// ReturnType утилита встроенная в TS
export type RootState = ReturnType<typeof store.getState>; // типизация состояния стора
// типизация действий
export type AppDispatch = typeof store.dispatch;
