// import Jimp from 'jimp';
import { httpServer } from './http_server';
// import robot from 'robotjs';
import dotenv from 'dotenv';
import { initWSServer } from './wsServer';

dotenv.config();

const HTTP_PORT = process.env.PORT || 3000;
const WS_PORT = process.env.WS_PORT || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT, () => {
  initWSServer(+WS_PORT);
});
