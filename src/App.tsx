import { PizzaContextProvider } from './PizzaContext/PizzaContext';
import PizzaIngredients from './PizzaIngredients';
import PizzaName from './PizzaName';
import PizzaSortingDropdown from './PizzaSortingDropdown';
import './App.css'

function App() {
  return (
    <PizzaContextProvider>
      <h2>Select your Pizza</h2>
      <div className='content-container'>
        <PizzaSortingDropdown />
        <PizzaName />
        <PizzaIngredients />
      </div>
    </PizzaContextProvider>
  );
}

export default App;
