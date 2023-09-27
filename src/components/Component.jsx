import React from "react";

function Component({ component }) {
  return (
    <div
      className="component"
      style={{ backgroundColor: component.status ? "green" : "red" }}
    >
      <h4>{component.name}</h4>
    </div>
  );
}

export default Component;
