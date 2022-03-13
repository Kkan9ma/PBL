import React from "react";
import HiddenFileInput from "../HiddenFileInput/HiddenFileInput";
import { StyledInfoContainer } from "../InfoContainer/InfoContainer.styles";

function LinkInfoContainer() {
  return (
    <StyledInfoContainer>
      <label htmlFor="address-input">
        URL 주소
        <input id="address-input" name="address-input" type="text" placeholder="URL 주소를 입력하세요." required/>
        <HiddenFileInput />
      </label>
    </StyledInfoContainer>
  )
}

export default LinkInfoContainer;
