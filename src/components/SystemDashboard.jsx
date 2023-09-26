import React from "react";
import { components } from "../data/components";
import Component from "./Component";

function SystemDashboard() {
  return (
    <div className="system-dashboard">
      {components.map((component) => (
        <Component
          name={component.name}
          energyConsumption={component.energyConsumption}
          status={component.status}
        />
      ))}
      Current energy consumption:
    </div>
  );
}

export default SystemDashboard;
