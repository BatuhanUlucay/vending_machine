import React from "react";
import { moneyUnits } from "../../data/moneyUnits";
import Coin from "./Coin";

function MoneyInsert() {
  return (
    <>
      <h2>Insert Money</h2>
      <div className="money-insert">
        {moneyUnits.map((unit) => (
          <Coin unit={unit} />
        ))}
      </div>
    </>
  );
}

export default MoneyInsert;
