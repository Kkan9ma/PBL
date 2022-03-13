import React, { useState } from "react";
import ContentsInfoModal from "./components/ContentsInfoModal/ContentInfoModal";
import ContentsUploadContainer from "./components/ContentsUploadContainer/ContentsUploadContainer";
import { selectOptionList } from "./constants/options";

function Editor() {
  const [selectOption, setSelectOption] = useState(selectOptionList[0]);
  const onSelectToolbar = (index) => {
    setSelectOption(selectOptionList[index])
  }
  
  return (
    <>
      <ContentsUploadContainer />
      <ContentsInfoModal onClick={onSelectToolbar} selectOptionList={selectOptionList} selectOption={selectOption} />
    </>
  )
}

export default Editor;
