import React from "react";

function ContentEditingArea() {
  return (
    <div className='carlton-content-editing-area' contentEditable={true} suppressContentEditableWarning={true}>
      contentEditable
    </div>
  )
}

export default ContentEditingArea;