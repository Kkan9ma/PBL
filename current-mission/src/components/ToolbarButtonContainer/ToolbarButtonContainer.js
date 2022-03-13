import React from 'react';
import { StyledButton, StyledListContainer, StyledSelectedButton } from "../ContentsInfoModal/EditorHeader.styles"

function ToolbarButtonContainer({optionName, selected}) {
  return (
    <StyledListContainer>
      {selected
        ? <StyledSelectedButton>{optionName}</StyledSelectedButton>
        : <StyledButton>{optionName}</StyledButton>
      }
    </StyledListContainer>
  )
}

export default ToolbarButtonContainer;
