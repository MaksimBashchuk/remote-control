import { COMMANDS } from '../constants';
import {
  handleDrawCircle,
  handleDrawRect,
  handleMouseMove,
  handleMousePosition,
  handlePrintScreen,
} from '../handlers';
import { logCommandError, logSuccess, parseArguments } from '../utils';

export const commandsController = async (msg: string) => {
  const [command, arg1, arg2] = parseArguments(msg);
  try {
    switch (command) {
      case COMMANDS.MOUSE_POS:
        const res = handleMousePosition();
        logSuccess(command);
        return res;

      case COMMANDS.MOUSE_DOWN:
        handleMouseMove(1, +arg1);
        logSuccess(command);
        return;

      case COMMANDS.MOUSE_UP:
        handleMouseMove(1, -arg1);
        logSuccess(command);
        return;

      case COMMANDS.MOUSE_RIGHT:
        handleMouseMove(+arg1, 1);
        logSuccess(command);
        return;

      case COMMANDS.MOUSE_LEFT:
        handleMouseMove(-arg1, 1);
        logSuccess(command);
        return;

      case COMMANDS.DRAW_RECT:
        handleDrawRect(+arg1, +arg2);
        logSuccess(command);
        return;

      case COMMANDS.DRAW_SQUARE:
        handleDrawRect(+arg1, +arg1);
        logSuccess(command);
        return;

      case COMMANDS.DRAW_CIRCLE:
        handleDrawCircle(+arg1);
        logSuccess(command);
        return;

      case COMMANDS.PRINT_SCR:
        const result = await handlePrintScreen();
        logSuccess(command);
        return result;

      default:
        break;
    }
  } catch {
    logCommandError(command);
  }
};
