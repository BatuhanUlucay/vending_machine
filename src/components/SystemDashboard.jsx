import React from "react";
import Component from "./Component";
import { useSelector } from "react-redux";

function SystemDashboard() {
  const state = useSelector((state) => state);

  function getCurrentEnergyConsumption() {
    let currentConsumption = 0;

    state.components.map((c) => {
      if (c.status === 1) currentConsumption += c.energyConsumption;
    });
    return currentConsumption;
  }

  return (
    <div className="system-dashboard">
      {state.components.map((component) => (
        <Component component={component} />
      ))}
      <div>Current energy consumption: {getCurrentEnergyConsumption()}</div>
    </div>
  );
}

export default SystemDashboard;
