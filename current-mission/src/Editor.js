import React from "react";
import ContentsInfoModal from "./components/ContentsInfoModal/ContentInfoModal";
import ContentsUploadContainer from "./components/ContentsUploadContainer/ContentsUploadContainer";

function Editor() {

  const currentOption = 'link';
  // const currentOption = 'audio';
  // const [currentOption, setCurrentOption] = useState(link);
  
  return (
    <>
      <ContentsUploadContainer />
      <ContentsInfoModal currentOption={currentOption} />
    </>
  )
}

export default Editor;
