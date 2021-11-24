import { commandsMap, commandsValuesMap } from './commandsMap';

export const getCommandsMap = () => commandsMap;
export const getCommands = () => Object.keys(getCommandsMap());
export const getCommandsValueMap = (command) => commandsValuesMap[command];
export const getCommandValue = (command) => getCommandsValueMap(command);
