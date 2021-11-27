import { EntireCommandsMap, EntireCommandsValuesMap, textPropertyCommandsMap } from './commandsMap';

export const getCommandsMap = (category) => EntireCommandsMap[category];
export const getCommandCategory = (command) => {
  return Object.keys(EntireCommandsMap)
    .find((commandMap) =>
      EntireCommandsMap[commandMap].hasOwnProperty(command))
}
export const getCommands = (category) => Object.keys(getCommandsMap(category));
export const getCommandsValueMap = (category, command) =>
  EntireCommandsValuesMap[category][command];
export const getCommandValue = (category, command) =>
  getCommandsValueMap(category, command);
export const textPropertyCommands = Object.keys(EntireCommandsMap['textProperty']);
export const documentElementCommands = Object.keys(EntireCommandsMap['documentElement']);
