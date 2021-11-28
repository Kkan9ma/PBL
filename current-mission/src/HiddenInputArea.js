import React from 'react';

function HiddenInputArea({ onChange }, ref) {
  return (
    <div>
      <input
        type="file"
        id="image_uploads"
        name="image_uploads"
        accept=".jpg, .jpeg, .png"
        onChange={onChange}
        ref={ref}
        style={{
          display: 'none',
        }}
      />
    </div>
  );
}

export default React.forwardRef(HiddenInputArea);
