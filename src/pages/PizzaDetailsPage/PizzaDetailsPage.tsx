import { Container, Typography } from "@toptal/picasso"
import GridItem from "@toptal/picasso/GridItem/GridItem"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usePizzaContext } from "../../lib/PizzaContext"
import { Pizza } from "../../lib/pizzaContext.types"
import { PizzaDetailsGrid } from "./style"

const useQuery = (id: string) => {
  const { unsortedPizzas } = usePizzaContext()

  const [pizza, setPizza] = useState<Pizza>()
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const param = params[id]
    if (!param) {
      return
    }

    const simulateLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const pizzaById = unsortedPizzas.find(pizza => pizza.id === Number(param))

      if (pizzaById) {
        setPizza(pizzaById)
      }

      setLoading(false)
    };

    simulateLoading();
  }, [params, id])

  return { pizza, loading }
}

const PizzaDetailsPage = () => {
  const { pizza, loading } = useQuery('id')

  if (loading) {
    return <div>Loading...</div>
  }

  if (!pizza) {
    return <div>Not Found</div>
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
