import { createSlice } from "@reduxjs/toolkit";

const valueRNASlice = createSlice({
  name: 'valueRNA',
  initialState: '',
  reducers: {
    addValueRNA(state, { payload }) {
      return payload
    }
  }
})

export const valueRNAReducer = valueRNASlice.reducer
export const { addValueRNA } = valueRNASlice.actions