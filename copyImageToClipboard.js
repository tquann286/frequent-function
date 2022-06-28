// Only images with mime type of “image/png” are supported.

export const copyImageToClipboard = async (imageElement) => {
  let canvas = document.createElement("canvas");
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(imageElement, 0, 0);

  const dataURL = canvas.toDataURL();
  const blob = await (await fetch(dataURL)).blob();
  navigator.clipboard.write([
    new ClipboardItem({
      "image/png": blob,
    }),
  ]);
};