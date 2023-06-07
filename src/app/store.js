import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counterReducer2 from '../features/counter/counterSlice2'
import { useEffect } from 'react'; 

export const store = configureStore({
  reducer: {
    counter1: counterReducer,
    counter2: counterReducer2
  },
})