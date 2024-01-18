import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConfig } from '@packages/shared/src/utils/constants';
import { IEvent } from '@/types/event';

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
