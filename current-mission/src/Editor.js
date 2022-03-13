import React, { useState } from "react";
import ContentsInfoContainer from "./components/ContentsInfoContainer/ContentsInfoContainer";
import ContentsUploadContainer from "./components/ContentsUploadContainer/ContentsUploadContainer";
import { selectOptionList } from "./constants/options";

function Editor() {
  const [isImage, setIsImage] = useState(false);
  const [isWidget, setIsWidget] = useState(false);
  const [selectOption, setSelectOption] = useState(selectOptionList[0]);

  const onSelectToolbar = (index) => {
    setSelectOption(selectOptionList[index])
    setIsWidget(false);
  }
  
  const onUploadImage = () => {
    setIsImage(true);
  }
  const onDeleteImage = () => {
    setIsImage(false);
    setIsWidget(false);
  }

  const addWidget = () => {
    setIsWidget(true);
  }

  return (
    <main>
      <ContentsUploadContainer 
        selectOption={selectOption} 
        isWidget={isWidget} 
        onUploadImage={onUploadImage} 
        onDeleteImage={onDeleteImage}
      />
      {isImage && 
        <ContentsInfoContainer 
          addWidget={addWidget}
          onClick={onSelectToolbar}
          selectOptionList={selectOptionList}
          selectOption={selectOption}
        />
      } 
    </main>
  )
}

export default Editor;
