import GridItem from "@toptal/picasso/GridItem/GridItem"
import { ReactNode } from "react"
import { usePizzaContext } from "../../lib/PizzaContext"
import { Ingredient } from "../../lib/pizzaContext.types"
import { IngredientsGrid } from "./style"

const PizzaIngredients = () => {
  const { sortedPizzas } = usePizzaContext()

  if (!sortedPizzas.length) {
    return null
  }

  const { ingredients } = sortedPizzas[0]

  return (
    <IngredientsGrid>
      {
        ingredients.map((item: Ingredient): ReactNode => {
          return (
            <GridItem key={item.imgUrl} small={4}>
              <img 
                src={item.imgUrl}
                title={item.name}
                alt={item.name}
                width="100%"
                height="100%"
              />
            </GridItem>
          )
        })
      }
    </IngredientsGrid>
  )
}

export default PizzaIngredients