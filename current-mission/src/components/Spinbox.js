import React, { useState, useRef } from "react";

function Spinbox({ id, onRemove }) {
  const [inputValue, setInputValue] = useState(0);
  const delayTime = useRef(1000);
  const [timeoutID, setTimeoutID] = useState(0);

  const updateValue = (event) => {
    if (timeoutID !== 0) {
      clearTimeout(timeoutID);
    }
    setInputValue((prevState) => {
      event.target.classList.contains("substract") === true
        ? --prevState
        : ++prevState;
      return prevState;
    });
    delayTime.current *= 0.8;
    setTimeoutID(() => {
      const id = setTimeout(() => {
        updateValue(event);
      }, delayTime.current);

      return id;
    });
  };

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
          onMouseDown={(e) => {
            if (e.button === 0) {
              updateValue(e);
              return;
            }
            clearTimeout(timeoutID);
            delayTime.current = 1000;
            setTimeoutID(0)
          }}
          onMouseUp={() => {
            clearTimeout(timeoutID);
            delayTime.current = 1000;
            setTimeoutID(0);
          }}
          onMouseLeave={() => {
            clearTimeout(timeoutID);
            delayTime.current = 1000;
            setTimeoutID(0);
          }}
        >
          +
        </button>
        <button
          className="spinbox__button substract"
          onMouseDown={(e) => {
            if (e.button === 0) {
              updateValue(e);
              return;
            }
            clearTimeout(timeoutID);
            delayTime.current = 1000;
            setTimeoutID(0)
          }}
          onMouseUp={() => {
            clearTimeout(timeoutID);
            delayTime.current = 1000;
            setTimeoutID(0);
          }}
          onMouseLeave={() => {
            clearTimeout(timeoutID);
            delayTime.current = 1000;
            setTimeoutID(0);
          }}
        >
          -
        </button>
        <button
          className="spinbox__button delete"
          onMouseDown={(e) => {
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
