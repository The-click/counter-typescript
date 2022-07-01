import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  values: {[id:string]:number}
  keys: string[]
}


const initialState: CounterState = {
  keys: [],
  values: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      if(state.values.hasOwnProperty(action.payload)){
        state.values[action.payload] += 1
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
    state.values[action.payload] -= 1
    },
    addCount: (state, action: PayloadAction<string>) => {
        state.keys.push(action.payload);
        state.values[action.payload] = Object.values(state.values).reduce((sum, current) => sum + current, 0)
    },
    delCount:(state, action: PayloadAction<string>) => {
      state.keys = state.keys.filter(el => el !== action.payload);
      delete state.values[action.payload];
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addCount, delCount } = counterSlice.actions

export default counterSlice.reducer