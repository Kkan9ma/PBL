import React from 'react';

function RenderingResultContainer({ HTMLResult }, ref) {
  return (
    <div>
      <h3>Result</h3>
      <div ref={ref}>{HTMLResult}</div>
    </div>
  );
}

export default React.forwardRef(RenderingResultContainer);
