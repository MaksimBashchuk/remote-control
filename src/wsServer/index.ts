import { WebSocket, WebSocketServer } from 'ws';
import { commandsController } from '../commandsController';
import { createWebSocketStream } from 'ws';

export const initWSServer = (port: number) => {
  const wsServer = new WebSocketServer({ port });

  wsServer.on('connection', (ws: WebSocket) => {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    duplex.on('readable', () => {
      let msg = '';
      const chunk = duplex.read();
      if (chunk) {
        msg += chunk;
      }
      commandsController(msg);
      console.log(msg);
      duplex.write(msg);
    });
  });
};
