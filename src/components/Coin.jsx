import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { insertMoney } from "../redux/actions";

function Coin({ unit }) {
  const dispatch = useDispatch();

  function handleCoinClick() {
    dispatch(insertMoney(unit));
  }

  return (
    <button className="coin" onClick={handleCoinClick}>
      {unit} ₺
    </button>
  );
}

export default Coin;
