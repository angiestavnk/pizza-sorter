import { usePizzaContext } from "../../lib/PizzaContext"
import './style.css'

const Pizza = () => {
  const { pizzas } = usePizzaContext()

  if (!pizzas.length) {
    return null
  }

  const { name, price, size, deliveryTime } = pizzas[0]

  return (
    <>
      <h3>
        Your Pizza is: {name}
      </h3>
      <ul>
        <li>Pizza price is: {price} $</li>
        <li>Pizza size is: {size} </li>
        <li>Pizza delivery time is: {deliveryTime} minutes</li>
      </ul>
    </>

  )
}

export default Pizza
