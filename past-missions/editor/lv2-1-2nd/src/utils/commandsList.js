export const commandsList = [
  {
    command: 'bold',
    value: '진하게',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'italic',
    value: '기울임',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'underline',
    value: '밑줄',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'strikethrough',
    value: '취소선',
    execCommand: (command) => {
      document.execCommand(command);
    },
  },
  {
    command: 'formatBlock',
    value: 'H1',
    execCommand: (command, value) => {
      document.execCommand(command, false, value);
    },
  },
  {
    command: 'formatBlock',
    value: 'H2',
    execCommand: (command, value) => {
      document.execCommand(command, false, value);
    },
  },
  {
    command: 'formatBlock',
    value: 'H3',
    execCommand: (command, value) => {
      document.execCommand(command, false, value);
    },
  },
  {
    command: 'createLink',
    value: 'Link',
    execCommand: (command) => {
      const URL = prompt('추가할 URL을 입력하세요.');

      if (URL && URL.trim()) {
        document.execCommand(command, false, URL);
      }
    },
  },
  {
    command: 'insertImage',
    value: 'Image',
    execCommand: (command) => {
      const URL = prompt('추가할 이미지의 URL을 입력하세요.');

      if (URL && URL.trim()) {
        document.execCommand(command, false, URL);
      }
    },
  },
];
