import { WebSocket, WebSocketServer } from 'ws';
import { commandsController } from '../commandsController';
import { createWebSocketStream } from 'ws';
import { INFO_MSGS } from '../constants';
import { logError, logInfo, logReceivedCommand } from '../utils';

export const initWSServer = (port: number) => {
  const wsServer = new WebSocketServer({ port });

  wsServer.on('connection', (ws: WebSocket) => {
    logInfo(INFO_MSGS.WS_CONNECTED);
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    duplex.on('readable', async () => {
      let msg = '';
      const chunk = duplex.read();
      if (chunk) {
        msg += chunk;
      }
      logReceivedCommand(msg);
      const res = await commandsController(msg);
      msg = res ? `${msg} ${res}\0` : `${msg}\0`;
      duplex.write(msg);
    });

    duplex.on('error', () => {
      logError(INFO_MSGS.STREAM_ERROR);
    });

    duplex.on('close', () => {
      logInfo(INFO_MSGS.STREAM_CLOSED);
    });

    ws.on('error', () => {
      logError(INFO_MSGS.WS_ERROR);
    });

    ws.on('close', () => {
      logInfo(INFO_MSGS.WS_CLOSED);
      duplex.destroy();
    });
  });
};
