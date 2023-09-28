import VendingMachine from "./components/VendingMachine";
import SystemDashboard from "./components/SystemDashboard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import vendingMachineReducer from "./redux/reducers";
import Popup from "./components/Popup";

const store = createStore(vendingMachineReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="main-layout">
        <SystemDashboard />
        <Popup />
        <VendingMachine />
      </div>
    </Provider>
  );
}

export default App;
