import { ReactNode } from "react";
import { usePizzaContext } from "../PizzaContext/PizzaContext"
import { Ingredients } from "../PizzaContext/pizzaContext.types";
import "./style.css"

const PizzaIngredients = () => {
  const { pizzas } = usePizzaContext();
  return (
    <div className="ingredients-container">
      {
        pizzas.length && pizzas[0].ingredients.map((item: Ingredients, idx: number): ReactNode => {
          return <img src={item.imgUrl} key={idx} title={item.name} alt={item.name} />
        })
      }
    </div>
  )
}

export default PizzaIngredients