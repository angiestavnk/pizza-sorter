import { Container, Typography } from "@toptal/picasso"
import GridItem from "@toptal/picasso/GridItem/GridItem"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usePizzaContext } from "../../lib/PizzaContext"
import { Pizza } from "../../lib/pizzaContext.types"
import { PizzaDetailsGrid } from "./style"

const useQuery = (name: string) => {
  const { unsortedPizzas } = usePizzaContext()
  
  const [pizza, setPizza] = useState<Pizza>()
  const params = useParams()

  useEffect(() => {
    const param = params[name]
    if (!param) {
      return
    }
    const pizzaById = unsortedPizzas.find(pizza => pizza.id === Number(param))

    if (pizzaById) {
      setPizza(pizzaById)
    }
  }, [params, name])

  return pizza
}

const PizzaDetailsPage = () => {
  
  const pizza = useQuery('id')

  if (!pizza) {
    return <div>...Loading</div>
  }

  return (
      <>
        <Container bottom="xlarge">
          <Typography variant="heading" size="large">Name: {pizza.name}</Typography>
          <Typography variant="heading" size="large">Delivery time: {pizza.deliveryTime} minutes</Typography>
          <Typography variant="heading" size="large">Size: {pizza.size}</Typography>
          <Typography variant="heading" size="large">Price: {pizza.price} $</Typography>
        </Container>
        <PizzaDetailsGrid>
          {
            pizza.ingredients.map(item => (
              <GridItem key={item.name} small={4}>
                <img
                  src={item.imgUrl}
                  width="100%"
                  height="100%"
                  title={item.name}
                />
              </GridItem>
            ))
          }
        </PizzaDetailsGrid>
        
      </>
  )
}

export default PizzaDetailsPage
