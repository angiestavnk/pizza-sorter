import { usePizzaContext } from "../PizzaContext/PizzaContext"
import './style.css'

const PizzaName = () => {
  const { pizzas } = usePizzaContext();

  return (
    <h3>
      Your Pizza is: {pizzas.length && pizzas[0].name}
    </h3>
  )
}

export default PizzaName
