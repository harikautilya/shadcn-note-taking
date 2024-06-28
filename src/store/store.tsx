import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import noteReducer from "./notes";


const store = () => configureStore({
  reducer: {
    notes: noteReducer
  }
})

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


export { store };