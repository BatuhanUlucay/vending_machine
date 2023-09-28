import VendingMachine from "./components/machine/VendingMachine";
import SystemDashboard from "./components/dashboard/SystemDashboard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Popup from "./components/ui/Popup";
import allReducers from "./redux/reducers";

const store = createStore(allReducers);

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
