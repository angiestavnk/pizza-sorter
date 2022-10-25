import PizzaProvider from './components/PizzaProvider';
import PizzaIngredients from './components/PizzaIngredients';
import Pizza from './components/Pizza';
import PizzaSortingDropdown from './components/PizzaSortingDropdown';
import './App.css'

function App() {
  return (
    <PizzaProvider>
      <h2>Select your Pizza</h2>
      <div className='content-container'>
        <PizzaSortingDropdown />
        <Pizza />
        <PizzaIngredients />
      </div>
    </PizzaProvider>
  );
}

export default App;