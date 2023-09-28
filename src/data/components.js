import { BsSnow2, BsFire, BsLightbulb } from "react-icons/bs";
import { GiRobotGrab } from "react-icons/gi";

// Initial components state
export const components = [
  {
    id: 0,
    name: "Cooling",
    logo: <BsSnow2 />,
    energyConsumption: 2,
    status: 0,
  },
  {
    id: 1,
    name: "Heating",
    logo: <BsFire />,
    energyConsumption: 2,
    status: 0,
  },
  {
    id: 2,
    name: "Lighting",
    logo: <BsLightbulb />,
    energyConsumption: 2,
    status: 0,
  },
  {
    id: 3,
    name: "Robot Arm",
    logo: <GiRobotGrab />,
    energyConsumption: 2,
    status: 0,
  },
];
