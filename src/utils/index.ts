export const parseArguments = (str: string) => {
  return str.split(' ');
};

export const logReceivedCommand = (msg: string) => {
  console.log(`Received command: ${msg}`);
};

export const logSuccess = (command: string) => {
  console.log(`\x1b[32mCommand ${command} was executed successfully\x1b[0m\n`);
};

export const logError = (msg: string) => {
  console.error(`\x1b[31m${msg}\x1b[0m\n`);
};

export const logCommandError = (command: string) => {
  const msg = `Command ${command} was failed`;
  logError(msg);
};

export const logInfo = (msg: string) => {
  console.log(`\x1b[35m${msg}\x1b[0m`);
};
