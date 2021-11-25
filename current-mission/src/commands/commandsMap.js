import {
  boldCommand,
  italicCommand,
  underlineCommand,
  strikethroughCommand,
  firstHalfCommand,
  secondHalfCommand,
  thirdHalfCommand,
  plainTextCommand,
} from './textPropertyCommands';

export const textPropertyCommandsMap = {
  bold: boldCommand,
  italic: italicCommand,
  underline: underlineCommand,
  strikethrough: strikethroughCommand,
  firstHalf: firstHalfCommand,
  secondHalf: secondHalfCommand,
  thirdHalf: thirdHalfCommand,
  plainText: plainTextCommand,
};

export const textPropertyCommandsValuesMap = {
  bold: '진하게',
  italic: '기울임',
  underline: '밑줄',
  strikethrough: '취소선',
  firstHalf: 'H1',
  secondHalf: 'H2',
  thirdHalf: 'H3',
  plainText: '강조 취소',
};

export const EntireCommandsMap = {
  textProperty: textPropertyCommandsMap,
  // TODO - documentCommand
};

export const EntireCommandsValuesMap = {
  textProperty: textPropertyCommandsValuesMap,
  // TODO - documentCommand
};
