import React, { useState } from "react";
import SpinboxList from "./SpinboxList";
import INITIAL_ORDER_NUMBER from "../contants.js";

function SpinboxContainer() {
  const [spinboxes, setSpinboxes] = useState([{ order: INITIAL_ORDER_NUMBER }]);
  const [orderNumber, setOrderNumber] = useState(INITIAL_ORDER_NUMBER + 1);

  const onAddNewSpinbox = () => {
    setOrderNumber((prevState) => {
      return ++prevState;
    });
    setSpinboxes(spinboxes.concat({ order: orderNumber }));
  };

  return (
    <>
      <SpinboxList spinboxes={spinboxes} />
      <button className="add-spinbox-button" onClick={onAddNewSpinbox}>
        스핀박스 레이아웃 추가하기
      </button>
    </>
  );
}

export default SpinboxContainer;
