import React from "react";
import { EditorHeader, StyledToolbar } from "./EditorHeader.styles";
import ToolbarButtonContainer from "../ToolbarButtonContainer/ToolbarButtonContainer";
import InstInfoContainer from "../InstInfoContainer/InstInfoContainer";
import LinkInfoContainer from "../LinkInfoContainer/LinkInfoContainer";
import AudioInfoContainer from "../AudioInfoContainer/AudioInfoContainer";
import EditorSubmitContainer from "../EditorSubmitContainer/EditorSubmitContainer";
import { generateKey } from "../../utils/utils";

function ContentsInfoModal({onClick, selectOptionList, selectOption, addWidget}) {

  const onSubmit = (e) => {
    e.preventDefault();
    const hiddenInput = e.target.querySelector('.hidden-file-inputfiles');
    
    if (hiddenInput && !hiddenInput.files[0].length) {
      // no file uploaded
      return;
    }
    addWidget();
  }

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
      <form onSubmit={(e) => {onSubmit(e)}}>
        <ul>
          <InstInfoContainer />
          {selectOption === selectOptionList[0] && <LinkInfoContainer />}
          {selectOption === selectOptionList[1] && <AudioInfoContainer />}
        </ul>
        <EditorSubmitContainer isFilledAllInputs={1}/>
      </form>
    </>
  )
};

export default ContentsInfoModal;
