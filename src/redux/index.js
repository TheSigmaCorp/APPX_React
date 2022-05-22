import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter"
import elementsSlice from './elements'

export default configureStore({
  reducer: {
    counter: counterReducer,
    elements: elementsSlice
  },
})