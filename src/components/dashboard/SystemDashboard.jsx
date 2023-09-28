import React from "react";
import Component from "./Component";
import { useSelector } from "react-redux";
import Weather from "./Weather";
import { getCurrentEnergyConsumption } from "../../util/machineUtils";

const VENDING_MACHINE_LOCATION = "Ankara";

function SystemDashboard() {
  const machineState = useSelector((state) => state.machine);

  return (
    <div className="system-dashboard bg-soft-gray rounded-small">
      <Weather cityName={VENDING_MACHINE_LOCATION} />
      {machineState.components.map((component) => (
        <Component component={component} key={component.id} />
      ))}
      <div>
        Current energy consumption is{" "}
        {getCurrentEnergyConsumption(machineState.components)} units/hour
      </div>
    </div>
  );
}

export default SystemDashboard;
