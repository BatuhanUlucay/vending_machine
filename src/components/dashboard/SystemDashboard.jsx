import React from "react";
import Component from "./Component";
import { useSelector } from "react-redux";
import Weather from "./Weather";
import { getCurrentEnergyConsumption } from "../../util/machineUtils";

const VENDING_MACHINE_LOCATION = "Ankara";

function SystemDashboard() {
  const state = useSelector((state) => state);

  return (
    <div className="system-dashboard bg-soft-gray rounded-small">
      <Weather cityName={VENDING_MACHINE_LOCATION} />
      {state.components.map((component) => (
        <Component component={component} />
      ))}
      <div>
        Current energy consumption is{" "}
        {getCurrentEnergyConsumption(state.components)} units/hour
      </div>
    </div>
  );
}

export default SystemDashboard;
