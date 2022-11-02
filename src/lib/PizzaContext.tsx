import { createContext, useContext } from "react"
import { Pizza, SortType } from "./pizzaContext.types"

type PizzaContextType = {
  sortedPizzas: Pizza[]
  unsortedPizzas: Pizza[]
  sortTypeChanged: (sortType: SortType) => void
  sortType: SortType
}

const contextDefault = {
  sortedPizzas: [],
  unsortedPizzas: [],
  sortTypeChanged: () => {},
  sortType: SortType.name
}

export const PizzaContext = createContext<PizzaContextType>(contextDefault)

export const usePizzaContext = () => {
  const {sortedPizzas, sortType, unsortedPizzas, sortTypeChanged} = useContext(PizzaContext)
  return {sortedPizzas, sortType, unsortedPizzas, sortTypeChanged}
}
