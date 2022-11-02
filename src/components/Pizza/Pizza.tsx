import { Container, Typography } from "@toptal/picasso"
import { usePizzaContext } from "../../lib/PizzaContext"
import { DataList } from "./style"

const Pizza = () => {
  const { sortedPizzas } = usePizzaContext()

  if (!sortedPizzas.length) {
    return null
  }

  const { name, price, size, deliveryTime } = sortedPizzas[0]

  return (
    <>
      <Container top='medium' bottom='medium'>
        <Typography variant="heading" size="large">
          Your Pizza is: {name}
        </Typography>
      </Container>
      <DataList>
        <Typography weight="semibold">
          <li>Pizza price is: {price} $</li>
          <li>Pizza size is: {size} </li>
          <li>Pizza delivery time is: {deliveryTime} minutes</li>
        </Typography>
      </DataList>
    </>

  )
}

export default Pizza
