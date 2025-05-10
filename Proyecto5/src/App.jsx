import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import RandomMeal from "./components/RandomMeal";

// FUNCION PARA PROBAR EL ERROR BOUNDARY
// function BrokenComponent() {
//   throw new Error("This is a broken component");
// }

function App() {
  return (
    <ErrorBoundary>
    <div className="App">
      <RandomMeal />
      {/* <BrokenComponent /> */}
    </div>
    </ErrorBoundary>
  );
}

export default App;
