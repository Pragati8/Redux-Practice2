import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value2: 0
}

export const counterSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        incBy10: (state) => {
            state.value2 += 10;
        }
    },
})

// export const { increment, decrement, incrementByAmount,testing } = counterSlice.actions;

export const { incBy10 } = counterSlice.actions;

export default counterSlice.reducer;