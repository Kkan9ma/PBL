import React, { useState } from "react";

function Spinbox() {
  return (
    <>
      <div className="spinbox">
        <input type="number" defaultValue="0" />
        <button className="spinbox__button add">+</button>
        <button className="spinbox__button substract">-</button>
        <button className="spinbox__button delete">스핀박스 삭제하기</button>
      </div>
    </>
  );
}

function SpinboxList({ spinboxes }) {
  return (
    <>
      {spinboxes.map((spinbox) => (
        <Spinbox spinbox={spinbox} key={spinbox.id} />
      ))}
    </>
  );
}

function SpinboxContainer() {
  const [spinboxes, setSpinboxes] = useState([
    {
      id: 1,
    },
  ]);

  return (
    <>
      <SpinboxList spinboxes={spinboxes} />
      <button className="add-spinbox-button">스핀박스 레이아웃 추가하기</button>
    </>
  );
}

export default SpinboxContainer;
