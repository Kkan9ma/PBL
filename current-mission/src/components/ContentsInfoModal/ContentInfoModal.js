import React from "react";
import { EditorHeader, StyledToolbar } from "./EditorHeader.styles";
import ToolbarButtonContainer from "../ToolbarButtonContainer/ToolbarButtonContainer";
import InstInfoContainer from "../InstInfoContainer/InstInfoContainer";
import LinkInfoContainer from "../LinkInfoContainer/LinkInfoContainer";
import AudioInfoContainer from "../AudioInfoContainer/AudioInfoContainer";
import EditorSubmitContainer from "../EditorSubmitContainer/EditorSubmitContainer";
import { generateKey } from "../../utils/utils";

function ContentsInfoModal({onClick, selectOptionList, selectOption}) {

  return (
    <>
      <EditorHeader>
        <StyledToolbar>
          {selectOptionList.map((option, index) => 
            <ToolbarButtonContainer
              key={generateKey(option)} 
              onClick={() => {onClick(index)}}
              selected={selectOption === option} optionName={option}
            />
          )}
        </StyledToolbar>
      </EditorHeader>
      <ul>
        <InstInfoContainer />
        {selectOption === selectOptionList[0] && <LinkInfoContainer />}
        {selectOption === selectOptionList[1] && <AudioInfoContainer />}
      </ul>
      <EditorSubmitContainer />
    </>
  )
};

export default ContentsInfoModal;
