import React, { useState, useRef } from 'react';

function Spinbox({ id, onRemove }) {
  const [inputValue, setInputValue] = useState(0); // TODO: magic number
  const delayTime = useRef(1000); // TODO: magic number
  const [timeoutID, setTimeoutID] = useState(0); // TODO: magic number

  const updateInputValueFasterRecursively = (event) => {
    setTimeoutID(() => {
      return setTimeout(() => {
        updateInputValue(event);
      }, (delayTime.current *= 0.8)); // TODO: magic number
    });
  };

  const updateInputValue = (event) => {
    setInputValue((prevState) => {
      return event.target.classList.contains('add') === true
        ? ++prevState
        : --prevState;
    });
    updateInputValueFasterRecursively(event);
  };

  const initStateValues = () => {
    clearTimeout(timeoutID);
    delayTime.current = 1000; // TODO: magic number
    setTimeoutID(0); // TODO: magic number
  };

  const isEventFromLeftButton = (event) => {
    return event.button === 0; // TODO: magic number
  };

  // TODO: magicNumber
  const isTimeoutIdInitialized = (timeoutID) => {
    return timeoutID === 0; // TODO: magic number
  };

  const handleMousedown = (event) => {
    if (!isEventFromLeftButton(event)) {
      initStateValues();
      return;
    }
    if (!isTimeoutIdInitialized(timeoutID)) {
      clearTimeout(timeoutID);
    }
    updateInputValue(event);
  };

  return (
    <>
      <div className="spinbox">
        <input
          type="number"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          className="spinbox__button add"
          onMouseDown={handleMousedown}
          onMouseUp={initStateValues}
          onMouseLeave={initStateValues}
        >
          +
        </button>
        <button
          className="spinbox__button substract"
          onMouseDown={handleMousedown}
          onMouseUp={initStateValues}
          onMouseLeave={initStateValues}
        >
          -
        </button>
        <button
          className="spinbox__button delete"
          onMouseDown={() => {
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
