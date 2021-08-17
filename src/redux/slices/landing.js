import { createSlice } from '@reduxjs/toolkit';

import { Apis } from '../apis';
import { createAsyncThunkApi } from '../apis/cerateApiAsyncThunk';
import { getLandingDataUrl } from '../constants/urls';

const initialState = {
  members: [],
};

export const getLandingDataAction = createAsyncThunkApi(
  'landing/getData',
  Apis.GET,
  getLandingDataUrl
);

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {},
  extraReducers: {
    [getLandingDataAction.fulfilled.toString()]: (
      state,
      { payload: { response } }
    ) => {
      state.members = response.members;
    },
  },
});

export const { reducer: landingReducer } = landingSlice;
