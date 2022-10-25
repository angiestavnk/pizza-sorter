import { createContext, useContext } from "react";
import { Pizza, SortType } from "./pizzaContext.types";

type PizzaContextType = {
  pizzas: Pizza[]
  sortTypeChanged: (sortType: SortType) => void
  sortType: SortType
}

const contextDefault = {
  pizzas: [],
  sortTypeChanged: () => {},
  sortType: SortType.name
}

export const PizzaContext = createContext<PizzaContextType>(contextDefault)

export const usePizzaContext = () => {
  const {pizzas, sortType, sortTypeChanged} = useContext(PizzaContext)
  return {pizzas, sortType, sortTypeChanged}
}
