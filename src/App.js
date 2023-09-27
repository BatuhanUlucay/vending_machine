import VendingMachine from "./components/VendingMachine";
import SystemDashboard from "./components/SystemDashboard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import vendingMachineReducer from "./redux/reducers";

const store = createStore(vendingMachineReducer);

function App() {
  return (
    <Provider store={store}>
      <SystemDashboard />
      <VendingMachine />
    </Provider>
  );
}

export default App;
