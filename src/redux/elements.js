import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedElement: '',
  currentContext: null
}

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    selectElement: (state, action) => {
      state.selectedElement = action.payload
    },
    setCurrentContext: (state, action) => {
      state.currentContext = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectElement, setCurrentContext } = elementsSlice.actions

export default elementsSlice.reducer