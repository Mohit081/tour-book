import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    allDestination: [],
  },
  reducers: {
    setAllDestination: (state, action) => {
      state.allDestination = action.payload;
    },
  },
});

export const { setAllDestination } = destinationSlice.actions;

export default destinationSlice.reducer;
