import React, { useState } from "react";
import ContentsInfoModal from "./components/ContentsInfoModal/ContentInfoModal";
import ContentsUploadContainer from "./components/ContentsUploadContainer/ContentsUploadContainer";
import { selectOptionList } from "./constants/options";

function Editor() {
  const [isImage, setIsImage] = useState(false);
  const [selectOption, setSelectOption] = useState(selectOptionList[0]);
  
  const onSelectToolbar = (index) => {
    setSelectOption(selectOptionList[index])
  }
  
  const onUploadImage = () => {
    setIsImage(true);
  }
  const onDeleteImage = () => {
    setIsImage(false);
  }

  return (
    <>
      <ContentsUploadContainer onUploadImage={onUploadImage} onDeleteImage={onDeleteImage}/>
      {isImage &&<ContentsInfoModal onClick={onSelectToolbar} selectOptionList={selectOptionList} selectOption={selectOption} />}
    </>
  )
}

export default Editor;
