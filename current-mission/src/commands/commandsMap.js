import { boldCommand } from './boldCommand';
import { italicCommand } from './italicCommand';
import { strikethroughCommand } from './strikethroughCommand';
import { underlineCommand } from './underlineCommand';

export const commandsMap = {
  bold: boldCommand,
  italic: italicCommand,
  underline: underlineCommand,
  strikethrough: strikethroughCommand,
};

export const commandsValuesMap = {
  bold: '진하게',
  italic: '기울임',
  underline: '밑줄',
  strikethrough: '취소선',
};
