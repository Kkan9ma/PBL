import React from "react";
import Spinbox from "./Spinbox";

function SpinboxList({ spinboxes }) {
  return (
    <>
      {spinboxes.map((spinbox) => (
        <Spinbox spinbox={spinbox} key={spinbox.order} />
      ))}
    </>
  );
}

export default SpinboxList;
