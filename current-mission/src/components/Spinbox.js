import React from "react";

function Spinbox({ id, onRemove }) {
  return (
    <>
      <div className="spinbox">
        <input type="number" defaultValue="0" />
        <button className="spinbox__button add">+</button>
        <button className="spinbox__button substract">-</button>
        <button
          className="spinbox__button delete"
          onClick={() => {
            onRemove(id);
          }}
        >
          스핀박스 삭제하기
        </button>
      </div>
    </>
  );
}

export default Spinbox;
