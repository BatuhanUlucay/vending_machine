import VendingMachine from "./components/machine/VendingMachine";
import SystemDashboard from "./components/dashboard/SystemDashboard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import vendingMachineReducer from "./redux/reducers";
import Popup from "./components/ui/Popup";

const store = createStore(vendingMachineReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="main-layout flex">
        <SystemDashboard />
        <Popup />
        <VendingMachine />
      </div>
    </Provider>
  );
}

export default App;
