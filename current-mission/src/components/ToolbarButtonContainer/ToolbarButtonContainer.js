import React from 'react';
import { StyledButton, StyledListContainer, StyledSelectedButton } from "../ContentsInfoContainer/EditorHeader.styles"



function ToolbarButtonContainer({onClick, optionName, selected}) {
  return (
    <StyledListContainer>
      {selected
        ? <StyledSelectedButton onClick={onClick}>{optionName}</StyledSelectedButton>
        : <StyledButton onClick={onClick}>{optionName}</StyledButton>
      }
    </StyledListContainer>
  )
}

export default ToolbarButtonContainer;
