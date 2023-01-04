import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type QRFormState = {
  colors: {
    contentColor: string;
    bgColor: string;
  };
};

const initialState: QRFormState = {
  colors: {
    contentColor: "#00ffff",
    bgColor: "#000000",
  },
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
  },
});

export const { changeColor } = QRFormSlice.actions;
export default QRFormSlice.reducer;
