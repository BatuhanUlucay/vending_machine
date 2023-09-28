import React from "react";
import PropTypes from "prop-types";

function Component({ component }) {
  return (
    <div
      className="component rounded-small"
      style={{ backgroundColor: component.status ? "green" : "red" }}
    >
      <>
        {component.logo} {component.name}
      </>
    </div>
  );
}

export default Component;

Component.propTypes = {
  component: PropTypes.object,
};
