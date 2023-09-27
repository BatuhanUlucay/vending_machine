import React from "react";

function Component({ component }) {
  return (
    <div
      className="component"
      style={{ backgroundColor: component.status ? "green" : "red" }}
    >
      <>
        {component.logo} {component.name}
      </>
    </div>
  );
}

export default Component;
