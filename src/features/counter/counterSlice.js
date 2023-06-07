import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    obj: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        testing: (state, action) => {
            state.obj.push(action.payload)
        }
    },
}
)

export const { increment, decrement, incrementByAmount,testing } = counterSlice.actions;

export default counterSlice.reducer;