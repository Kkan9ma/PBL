export const execCommand = (
  command,
  boolean = false,
  formatBlockValue = null,
) => {
  document.execCommand(command, boolean, formatBlockValue);
};
