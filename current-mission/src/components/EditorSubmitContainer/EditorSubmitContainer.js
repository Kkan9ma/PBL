import React from "react";
import { StyledSubmitButton } from "./EditorSubmitContainer.styles";

function EditorSubmitContainer({isFilledAllInputs}) {
  return (
    <div>
      <StyledSubmitButton type="submit" isFilledAllInputs={isFilledAllInputs}>위젯 등록</StyledSubmitButton>
    </div>
  )
}

export default EditorSubmitContainer;
