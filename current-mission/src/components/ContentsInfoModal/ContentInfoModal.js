import React from "react";
import AudioInfoContainer from "../AudioInfoContainer/AudioInfoContainer";
import EditorSubmitContainer from "../EditorSubmitContainer/EditorSubmitContainer";
import InstInfoContainer from "../InstInfoContainer/InstInfoContainer";
import LinkInfoContainer from "../LinkInfoContainer/LinkInfoContainer";
import ToolbarButtonContainer from "../ToolbarButtonContainer/ToolbarButtonContainer";
import { EditorHeader, StyledToolbar } from "./EditorHeader.styles";

function ContentsInfoModal({currentOption}) {
  const link = 'link';
  const audio = 'audio';

  return (
    <>
      <EditorHeader>
        <StyledToolbar>
          <ToolbarButtonContainer selected={currentOption === link} optionName={link}/>
          <ToolbarButtonContainer selected={currentOption === audio} optionName={audio}/>
        </StyledToolbar>
      </EditorHeader>
      <ul>
        <InstInfoContainer />
        {currentOption === link && <LinkInfoContainer />}
        {currentOption === audio && <AudioInfoContainer />}
      </ul>
      <EditorSubmitContainer />
    </>
  )
};

export default ContentsInfoModal;
