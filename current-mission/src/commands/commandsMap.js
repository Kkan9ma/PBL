import { boldCommand } from './boldCommand';
import {
  firstHalfCommand,
  plainTextCommand,
  secondHalfCommand,
  thirdHalfCommand,
} from './formatBlockCommands';
import { italicCommand } from './italicCommand';
import { strikethroughCommand } from './strikethroughCommand';
import { underlineCommand } from './underlineCommand';

export const commandsMap = {
  bold: boldCommand,
  italic: italicCommand,
  underline: underlineCommand,
  strikethrough: strikethroughCommand,
  firstHalf: firstHalfCommand,
  secondHalf: secondHalfCommand,
  thirdHalf: thirdHalfCommand,
  plainText: plainTextCommand,
};

export const commandsValuesMap = {
  bold: '진하게',
  italic: '기울임',
  underline: '밑줄',
  strikethrough: '취소선',
  firstHalf: 'H1',
  secondHalf: 'H2',
  thirdHalf: 'H3',
  plainText: '강조 취소',
};
