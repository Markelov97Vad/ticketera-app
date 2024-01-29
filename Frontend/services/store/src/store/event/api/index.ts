import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConfig } from '@packages/shared/src/utils/constants';
import { IEvent } from '@/models/event';
import { addTickets } from '@/store/place/placeSlice';

export const fetchEvents = createAsyncThunk<
  IEvent[],
  undefined,
  { rejectValue: string }
>(
  // имя action
  'event/fetchEvents',
  async function (_, { rejectWithValue }) {
    const response = await fetch(apiConfig.event);

    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }

    const data = await response.json();

    return data as IEvent[];
  },
);

export const getCurrentEvent = createAsyncThunk<
  IEvent,
  string,
  { rejectValue: string }
>('event/currentEvent', async function (id, { rejectWithValue, dispatch }) {
  const response = await fetch(`${apiConfig.event}/${id}`);
  try {
    if (!response.ok) {
      return await Promise.reject(new Error(`Status: ${response.status}`));
    }
    const json = (await response.json()) as IEvent;
    dispatch(addTickets(json.tickets));
    return json;
  } catch (err) {
    return rejectWithValue(`Ошибка при получении данных мероприятия: ${err}`);
  }
});

// export const getCurrentEvent = createAsyncThunk<
//   IEvent,
//   string,
//   { rejectValue: string }
// >('event/currentEvent', async function (id, { rejectWithValue }) {
//   const response = await fetch(`${apiConfig.event}/${id}`);
//   try {
//     if (!response.ok) {
//       return await Promise.reject(new Error(`Status: ${response.status}`));
//     }

//     return (await response.json()) as IEvent;
//   } catch (err) {
//     return rejectWithValue(`Ошибка при получении данных мероприятия: ${err}`);
//   }
// });
