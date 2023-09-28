import React from "react";
import { useDispatch } from "react-redux";
import { insertMoney } from "../../redux/actions";
import PropTypes from "prop-types";

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

Coin.propTypes = {
  component: PropTypes.number,
};
