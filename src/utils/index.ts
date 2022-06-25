export const parseArguments = (str: string) => {
  return str.split(' ');
};

export const logReceivedCommand = (msg: string) => {
  console.log(`Received command: ${msg}\n`);
};

export const logSuccess = (command: string) => {
  console.log(`\x1b[32mCommand ${command} was executed successfully\x1b[0m`);
};

export const logError = (command: string) => {
  console.error(`\x1b[31mCommand ${command} was failed\x1b[0m`);
};

export const logInfo = (msg: string) => {
  console.log(`\x1b[35m${msg}\x1b[0m`);
};
