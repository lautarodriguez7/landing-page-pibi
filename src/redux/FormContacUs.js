import {createSlice} from '@reduxjs/toolkit'

export const formContactUs = createSlice({
  name: 'formContactUs',
  initialState: {
    list: [],
  },
  createSlice: (state, action) => {
    state.list = action.payload
  },
})

export const {createFormContactUs} = formContactUs.actions
export default formContactUs.reducer
