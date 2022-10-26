import { Typography } from "@toptal/picasso"
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
      <Typography variant="heading" size="large" style={{ margin: '20px 0px' }}>
        Your Pizza is: {name}
      </Typography>
      <Typography weight="semibold" as="ul">
        <li>Pizza price is: {price} $</li>
        <li>Pizza size is: {size} </li>
        <li>Pizza delivery time is: {deliveryTime} minutes</li>
      </Typography>
    </>

  )
}

export default Pizza
