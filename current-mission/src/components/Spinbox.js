import React, { useState } from "react";

function Spinbox({ id, onRemove }) {
  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <div className="spinbox">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="spinbox__button add"
          onClick={() => {
            setInputValue((prevState) => {
              return ++prevState;
            });
          }}
        >
          +
        </button>
        <button
          className="spinbox__button substract"
          onClick={() => {
            setInputValue((prevState) => {
              return --prevState;
            });
          }}
        >
          -
        </button>
        <button
          className="spinbox__button delete"
          onClick={(e) => {
            e.preventDefault();
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
