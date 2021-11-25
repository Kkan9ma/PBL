import { EntireCommandsMap, EntireCommandsValuesMap } from './commandsMap';

export const getCommandsMap = (category) => {
  return EntireCommandsMap[category];
};

export const getCommands = (category) => Object.keys(getCommandsMap(category));
export const getCommandsValueMap = (category, command) =>
  EntireCommandsValuesMap[category][command];
export const getCommandValue = (category, command) =>
  getCommandsValueMap(category, command);
