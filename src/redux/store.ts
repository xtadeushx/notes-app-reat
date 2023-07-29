import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/notes-slice";

export const store = configureStore({
  reducer: {
    notes: noteSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch