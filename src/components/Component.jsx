import React from "react";

function Component({ name, energyConsumption, status }) {
  return (
    <div
      className="component"
      style={{ backgroundColor: status ? "green" : "red" }}
    >
      <h4>{name}</h4>
    </div>
  );
}

export default Component;
