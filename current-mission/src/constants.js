export const commandsList = [
  {
    command: 'bold',
    text: '진하게',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'italic',
    text: '기울임',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'underline',
    text: '밑줄',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'strikethrough',
    text: '취소선',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'formatBlock',
    text: 'H1',
    execCommand: (command, text) => {
      document.execCommand(command, false, text);
    },
  },
  {
    command: 'formatBlock',
    text: 'H2',
    execCommand: (command, text) => {
      document.execCommand(command, false, text);
    },
  },
  {
    command: 'formatBlock',
    text: 'H3',
    execCommand: (command, text) => {
      document.execCommand(command, false, text);
    },
  },
];
