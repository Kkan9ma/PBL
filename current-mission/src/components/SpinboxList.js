import React from "react";
import Spinbox from "./Spinbox";

function SpinboxList({ spinboxes, onRemove }) {
  return (
    <>
      {spinboxes.map((spinbox) => {
        return <Spinbox id={spinbox.id} key={spinbox.id} onRemove={onRemove} />;
      })}
    </>
  );
}

export default SpinboxList;
