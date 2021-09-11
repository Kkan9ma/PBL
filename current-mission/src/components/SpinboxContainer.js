import React, { useState } from 'react';
import SpinboxList from './SpinboxList';
import {SPINBOX_STATE} from '../constants';

function SpinboxContainer() {
  const [spinboxes, setSpinboxes] = useState([
    {id: SPINBOX_STATE.INITIAL_ID, }
  ]);
  const [nextId, setNextId] = useState(SPINBOX_STATE.INITIAL_ID + 1);

  const onAddNewSpinbox = () => {
    setSpinboxes((prevState) => {
      return prevState.concat({ id: nextId });
    });
    setNextId((prevState) => {
      return ++prevState;
    });
  };

  const onRemove = (id) => {
    setSpinboxes(
      spinboxes.filter((spinbox) => {
        return spinbox.id !== id;
      })
    );
  };

  return (
    <>
      <SpinboxList spinboxes={spinboxes} onRemove={onRemove} />
      <button className="add-spinbox-button" onClick={onAddNewSpinbox}>
        스핀박스 레이아웃 추가하기
      </button>
    </>
  );
}

export default SpinboxContainer;
