import { configureStore } from "@reduxjs/toolkit";
import QRFormReducer from "../components/QRForm/QRFormSlice";

export const store = configureStore({
  reducer: {
    qrform: QRFormReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch