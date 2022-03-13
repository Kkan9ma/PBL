import React, {useState, useRef} from "react";
import { getImageFromInput, validImageFileType } from "../../utils/utils";
import HiddenFileInput from "../HiddenFileInput/HiddenFileInput";
import { StyledPhotoContainer } from "./PhotoContainer.styles";

function PhotoContainer() {
  const hiddenFileInputRef = useRef(null);
  const [image, setImage] = useState(false);

  const clickHiddenFileInput = () => {
    hiddenFileInputRef.current.click();
  }

  const handleClickInput = (event) => {
    event.stopPropagation();
    clickHiddenFileInput();
  }

  const onUpload = (event) => {
    const file = event.target.files[0];

    if (!validImageFileType(file)) {
      alert('올바른 형식의 파일이 아닙니다.');
      return;
    }

    setImage(getImageFromInput(file));
  }

  return (
    <StyledPhotoContainer>
      {
        image ||
          <button type="button" onClick={clickHiddenFileInput}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor" preserveAspectRatio="xMidYMid meet">
              <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z" />
            </svg>
            <span>
              사진 올리기
            </span>
            <HiddenFileInput onClick={handleClickInput} onUpload={onUpload} ref={hiddenFileInputRef}/>
          </button>
      }
    </StyledPhotoContainer>
  )
}

export default PhotoContainer;
