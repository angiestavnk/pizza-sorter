import { ReactNode } from "react";
import { usePizzaContext } from "../../lib/PizzaContext"
import { Ingredient } from "../../lib/pizzaContext.types";
import "./style.css"

const PizzaIngredients = () => {
  const { pizzas } = usePizzaContext();
  return (
    <div className="ingredients-container">
      {
        pizzas.length && pizzas[0].ingredients.map((item: Ingredient): ReactNode => {
          return <img src={item.imgUrl} key={item.imgUrl} title={item.name} alt={item.name} />
        })
      }
    </div>
  )
}

export default PizzaIngredients