import React, {useRef} from 'react';
import { validAudioFileType } from '../../utils/utils';
import HiddenFileInput from '../HiddenFileInput/HiddenFileInput';
import { StyledInfoContainer } from '../InfoContainer/InfoContainer.styles';

function AudioInfoContainer() {
  const hiddenFileInputRef = useRef(null);

  const onClick = () => {
    hiddenFileInputRef.current.click();
  }

  const handleClickInput = (event) => {
    event.stopPropagation();
    onClick();
  }

  const onUpload = (event) => {
    const file = event.target.files[0];

    console.log(file.type);
    if (!validAudioFileType(file)) {
      alert('올바른 형식의 파일이 아닙니다.');
      return;
    }

    // setImage(getImageFromInput(file));
    // onUploadImage();
  }

  return (
    <StyledInfoContainer>
      <label htmlFor="music-file">
        음악 파일
        <button onClick={onClick} style={{width: '200px', height: '45px', border:'none', background:'none' }} type="button" name="music-file" id="music-file">
          <svg
            xmlns="http://www.w3.org/2000/svg" x="0" y="0"
            enableBackground="new 0 0 122.88 95.21" version="1.1"
            viewBox="-125 0 450 100"
            xmlSpace="preserve"
          >
            <path d="M68.37 62.24c.34-.06.68-.08 1-.08.15 0 .3.01.45.03V50.66l-12.46 3.58v14.27c0 .05 0 .21.01.24 0 1.1-.56 2.18-1.48 3.05a6.75 6.75 0 01-3.46 1.71c-.37.06-.73.1-1.08.1-1.01 0-1.92-.26-2.61-.73-.72-.48-1.2-1.17-1.35-2.01-.03-.17-.05-.35-.05-.52 0-1.1.56-2.18 1.48-3.04a6.75 6.75 0 013.46-1.71c.5-.09.99-.11 1.45-.08.28.02.54.06.79.11V47.82H55l17.64-4.04v20.69l.03.22c.01.09.01.18.01.26 0 .94-.48 1.86-1.26 2.59-.75.71-1.79 1.25-2.93 1.45-.31.05-.62.08-.91.08-.86 0-1.63-.22-2.22-.62-.61-.41-1.03-1-1.15-1.72-.03-.15-.04-.3-.04-.45 0-.94.48-1.86 1.26-2.59.77-.72 1.8-1.26 2.94-1.45zm-6.93-30.86c7.44 0 14.18 3.02 19.06 7.89a26.85 26.85 0 017.89 19.06c0 7.44-3.02 14.18-7.89 19.05a26.85 26.85 0 01-19.06 7.89c-7.44 0-14.18-3.02-19.05-7.89-4.88-4.88-7.89-11.61-7.89-19.05 0-7.44 3.02-14.18 7.89-19.06a26.868 26.868 0 0119.05-7.89zm15.71 11.23a22.16 22.16 0 00-15.71-6.51c-6.14 0-11.69 2.49-15.71 6.51a22.16 22.16 0 00-6.51 15.71c0 6.14 2.49 11.69 6.51 15.71a22.16 22.16 0 0015.71 6.51c6.14 0 11.69-2.49 15.71-6.51a22.16 22.16 0 006.51-15.71c0-6.13-2.48-11.69-6.51-15.71zM2.48 20.74h4.5v-9.86A2.48 2.48 0 019.46 8.4h4.41V2.48A2.48 2.48 0 0116.35 0h40.26a2.48 2.48 0 012.48 2.48V8.4h54.3a2.48 2.48 0 012.48 2.48v9.86h4.53a2.48 2.48 0 012.48 2.48c0 .18-.02.36-.06.52l-8.68 63.81c-.28 2.08-1.19 4.01-2.59 5.41-1.38 1.38-3.21 2.24-5.36 2.24H14.7c-2.16 0-4.03-.87-5.43-2.26-1.41-1.41-2.31-3.35-2.54-5.46l-6.72-64a2.48 2.48 0 012.21-2.72c.09-.01.17-.01.26-.02zm6.98 4.97H5.23l6.44 61.27c.1.98.5 1.85 1.1 2.46.5.5 1.17.81 1.93.81h91.5c.75 0 1.38-.3 1.87-.79.62-.62 1.03-1.53 1.17-2.55l8.32-61.19-108.1-.01zm2.48-12.34v7.36l98.97-1.05v-6.31h-54.3a2.48 2.48 0 01-2.48-2.48V4.97h-35.3v5.92a2.48 2.48 0 01-2.48 2.48h-4.41z" />
          </svg>
        </button>
        <HiddenFileInput onClick={handleClickInput} onUpload={onUpload} ref={hiddenFileInputRef}/>
      </label>
    </StyledInfoContainer>
  )
}

export default AudioInfoContainer;
