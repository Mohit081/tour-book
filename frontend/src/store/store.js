import { configureStore } from '@reduxjs/toolkit';
import tourReducer from "./slice/tourSlice.js"
import destinationReducer from "./slice/destinationSlice"

const store = configureStore({
  reducer: {
    tour: tourReducer,
    destination: destinationReducer
  },
});

export default store;
