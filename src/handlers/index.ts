import Jimp from 'jimp';
import { dragMouse, getMousePos, mouseClick, mouseToggle, moveMouse, screen } from 'robotjs';
import { DEFAULT_IMG_SIZE } from '../constants';

export const handleMousePosition = (): string => {
  const { x, y } = getMousePos();
  return `${x},${y}`;
};

export const handleMouseMove = (xShift: number, yShift: number) => {
  const { x, y } = getMousePos();

  moveMouse(x + xShift, y + yShift);
};

export const handleDrawRect = (width: number, height: number) => {
  const { x, y } = getMousePos();
  const endX = x + width;
  const endY = y + height;
  mouseClick();
  mouseToggle('down');
  for (let i = x; i < endX; i++) {
    moveMouse(i, y);
  }
  for (let i = y; i < endY; i++) {
    moveMouse(endX, i);
  }
  for (let i = endX; i > x; i--) {
    moveMouse(i, endY);
  }
  for (let i = endY; i > y; i--) {
    moveMouse(x, i);
  }
  mouseToggle('up');
};

export const handleDrawCircle = (radius: number) => {
  const { x, y } = getMousePos();
  mouseClick();
  mouseToggle('down');
  for (let i = 0; i <= Math.PI * 2; i += 0.03) {
    const cX = x + radius + radius * -Math.cos(i);
    const cY = y + radius * Math.sin(i);
    dragMouse(cX, cY);
  }
  mouseToggle('up');
};

export const handlePrintScreen = async () => {
  const { x, y } = getMousePos();
  const robotPicture = screen.capture(x, y, DEFAULT_IMG_SIZE, DEFAULT_IMG_SIZE);
  const { width, height } = robotPicture;
  const img = new Jimp(width, height);

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, (x, y, i) => {
    const color = robotPicture.colorAt(x, y);
    const red = parseInt(color[0] + color[1], 16);
    const green = parseInt(color[2] + color[3], 16);
    const blue = parseInt(color[4] + color[5], 16);

    img.bitmap.data[i + 0] = Number(red);
    img.bitmap.data[i + 1] = Number(green);
    img.bitmap.data[i + 2] = Number(blue);
    img.bitmap.data[i + 3] = 255;
  });

  const base64 = await img.getBase64Async(Jimp.MIME_PNG);
  return base64.split(',')[1];
};
