import { Grid } from "@toptal/picasso";
import GridItem from "@toptal/picasso/GridItem/GridItem";
import { ReactNode } from "react";
import { usePizzaContext } from "../../lib/PizzaContext"
import { Ingredient } from "../../lib/pizzaContext.types";
import "./style.css"

const PizzaIngredients = () => {
  const { pizzas } = usePizzaContext();
  return (
    <Grid style={{ alignItems: "normal" }}>
      {
        pizzas.length && pizzas[0].ingredients.map((item: Ingredient): ReactNode => {
          return (
            <GridItem key={item.imgUrl} small={4}>
              <img src={item.imgUrl} title={item.name} alt={item.name} />
            </GridItem>
          )
        })
      }
    </Grid>
  )
}

export default PizzaIngredients