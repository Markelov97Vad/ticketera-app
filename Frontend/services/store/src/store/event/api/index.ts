import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConfig } from '@packages/shared/src/utils/constants';
import { EventType } from '@/types/event';

export const fetchEvents = createAsyncThunk<
  EventType[],
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

    return data as EventType[];
  },
);

export const getCurrentEvent = createAsyncThunk<
  EventType,
  string,
  { rejectValue: string }
>('event/currentEvent', async function (id, { rejectWithValue }) {
  const response = await fetch(`${apiConfig.event}/${id}`);
  try {
    if (!response.ok) {
      return await Promise.reject(new Error(`Status: ${response.status}`));
    }

    return (await response.json()) as EventType;
  } catch (err) {
    return rejectWithValue(`Ошибка при получении данных мероприятия: ${err}`);
  }
});
