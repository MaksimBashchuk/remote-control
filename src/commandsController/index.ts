import { COMMANDS } from '../constants';
import {
  handleDrawCircle,
  handleDrawRect,
  handleMouseMove,
  handleMousePosition,
  handlePrintScreen,
} from '../handlers';
import { parseArguments } from '../utils';

export const commandsController = async (msg: string) => {
  console.log(msg);
  const [command, arg1, arg2] = parseArguments(msg);
  switch (command) {
    case COMMANDS.MOUSE_POS:
      return handleMousePosition();

    case COMMANDS.MOUSE_DOWN:
      handleMouseMove(1, +arg1);
      return;

    case COMMANDS.MOUSE_UP:
      handleMouseMove(1, -arg1);
      return;

    case COMMANDS.MOUSE_RIGHT:
      handleMouseMove(+arg1, 1);
      return;

    case COMMANDS.MOUSE_LEFT:
      handleMouseMove(-arg1, 1);
      return;

    case COMMANDS.DRAW_RECT:
      handleDrawRect(+arg1, +arg2);
      return;

    case COMMANDS.DRAW_SQUARE:
      handleDrawRect(+arg1, +arg1);
      return;

    case COMMANDS.DRAW_CIRCLE:
      handleDrawCircle(+arg1);
      return;

    case COMMANDS.PRINT_SCR:
      return await handlePrintScreen();

    default:
      break;
  }
};
