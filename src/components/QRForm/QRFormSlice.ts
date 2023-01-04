import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type QRFormState = {
  colors: {
    contentColor: string;
    bgColor: string;
  };
  glow: boolean
  content: string
  withImg: boolean
};

const initialState: QRFormState = {
  colors: {
    contentColor: "#00ffff",
    bgColor: "#000000",
  },
  glow: true,
  content: "https://github.com/JonaVS",
  withImg: true
};

export type ColorPayload = {
  colorType: "contentColor" | "bgColor";
  color: string;
};

export const QRFormSlice = createSlice({
  name: "qrcodeForm",
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<ColorPayload>) => {
      action.payload.colorType === "contentColor"
        ? (state.colors.contentColor = action.payload.color)
        : (state.colors.bgColor = action.payload.color);
    },
    toggleGlowEffect: (state, action:PayloadAction<boolean>) => {
      state.glow = action.payload
    },
    changeContent: (state, action:PayloadAction<string>) => {
      state.content = action.payload !== "" ? action.payload : initialState.content
    },
    toggleWithImg: (state, action:PayloadAction<boolean>) => {
      state.withImg = action.payload
    } 
  },
});

export const { changeColor, toggleGlowEffect, toggleWithImg, changeContent } = QRFormSlice.actions;
export default QRFormSlice.reducer;
