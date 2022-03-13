import React from "react";
import { StyledInfoContainer } from "../InfoContainer/InfoContainer.styles";

function InstInfoContainer() {
  return (
    <StyledInfoContainer>
      <label htmlFor="inst-name">
        악기 이름
        <input id="inst-name" name="inst-name" type="text" placeholder="악기 이름을 입력하세요."/>
      </label>
    </StyledInfoContainer>
  )
}

export default InstInfoContainer;
