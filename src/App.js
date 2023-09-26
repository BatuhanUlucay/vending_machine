import VendingMachine from "./components/VendingMachine";
import Weather from "./components/Weather";
import SystemDashboard from "./components/SystemDashboard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import vendingMachineReducer from "./redux/reducers";
import LoginContainer from "./components/LoginContainer";

const store = createStore(vendingMachineReducer);

function App() {
  return (
    <Provider store={store}>
      <Weather cityName={"Ankara"} />
      <SystemDashboard />
      <LoginContainer />
      <VendingMachine />
    </Provider>
  );
}

export default App;
