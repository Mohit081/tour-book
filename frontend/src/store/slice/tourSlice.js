import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
    name:"tour",
    initialState:{
        allTour:[],
    },
    reducers: {
        setAllTour: (state, action) => {
            state.allTour = action.payload;
        }
    }
})

export const {setAllTour} = tourSlice.actions;
export default tourSlice.reducer;