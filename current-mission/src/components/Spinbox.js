import React, { useState, useRef } from 'react';
import { SPINBOX_STATE } from '../constants';

function Spinbox({ id, onRemove }) {
  const [inputValue, setInputValue] = useState(
    SPINBOX_STATE.INITIAL_INPUT_VALUE
  );
  const delayTime = useRef(SPINBOX_STATE.INITIAL_DELAY_TIME);
  const timeoutID = useRef(SPINBOX_STATE.INITIAL_TIMEOUT_ID);

  const updateInputValueFasterRecursively = (event) => {
    timeoutID.current = setTimeout(
      () => {
        updateInputValue(event);
      },
      delayTime.current > SPINBOX_STATE.MINIMUM_DELAY_TIME
        ? (delayTime.current /= SPINBOX_STATE.DELAYTIME_DECREASE_RATE)
        : SPINBOX_STATE.MINIMUM_DELAY_TIME
    );
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
    clearTimeout(timeoutID.current);
    delayTime.current = SPINBOX_STATE.INITIAL_DELAY_TIME;
    timeoutID.current = SPINBOX_STATE.INITIAL_TIMEOUT_ID;
  };

  const isEventFromLeftButton = (event) => {
    return event.button === SPINBOX_STATE.LEFT_BUTTON;
  };

  const isTimeoutIdInitialized = (timeoutID) => {
    return timeoutID === SPINBOX_STATE.INITIAL_TIMEOUT_ID;
  };

  const handleMousedown = (event) => {
    if (!isEventFromLeftButton(event)) {
      initStateValues();
      return;
    }
    if (!isTimeoutIdInitialized(timeoutID.current)) {
      clearTimeout(timeoutID.current);
    }
    updateInputValue(event);
  };

  return (
    <>
      <div className='spinbox'>
        <input
          type='number'
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          className='spinbox__button add'
          onMouseDown={handleMousedown}
          onMouseUp={initStateValues}
          onMouseLeave={initStateValues}
        >
          +
        </button>
        <button
          className='spinbox__button substract'
          onMouseDown={handleMousedown}
          onMouseUp={initStateValues}
          onMouseLeave={initStateValues}
        >
          -
        </button>
        <button
          className='spinbox__button delete'
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
