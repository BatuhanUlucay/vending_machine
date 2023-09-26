import VendingMachine from "./components/VendingMachine";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <Weather cityName={"Ankara"} />
      <VendingMachine />
    </>
  );
}

export default App;
