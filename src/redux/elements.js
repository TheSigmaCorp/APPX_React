import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedElement: '',
}

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    selectElement: (state,action) => {
      state.selectedElement = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectElement } = elementsSlice.actions

export default elementsSlice.reducer