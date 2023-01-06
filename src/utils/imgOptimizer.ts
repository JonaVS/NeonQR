import { Dispatch } from "@reduxjs/toolkit";
import { changeImage } from "../components/QRForm/QRFormSlice";

//This is used to mantain the aspect ratio of images inside the QRCode
export const optimizeQRCodeImg = (rawImgURL:string, dispatch: Dispatch) => {
  const image = new Image();
  image.src = rawImgURL
  image.onload = handleImgLoad

  function handleImgLoad() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return

    canvas.width = 40;
    canvas.height = 40;
    const aspectHeight = image.height * (canvas.width / image.width);
    const heigthOffset = ((aspectHeight - canvas.height) / 2) * -1;

    ctx.drawImage(image, 0, heigthOffset, canvas.width, aspectHeight);

    const optimizedImgURL = canvas.toDataURL("image/png") as string;
    optimizedImgURL && dispatch(changeImage(optimizedImgURL))
  }
};