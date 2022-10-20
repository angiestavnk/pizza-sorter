import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { Pizza, ProviderProps, SortProduct, SortType } from "./pizzaContext.types";
import { getPizzaData } from "./pizzaData";


const sortProduct: SortProduct = (products, sortParam) => {
  return products.sort((a, b) => a[sortParam] > b[sortParam] ? 1 : -1)
}

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

const PizzaContext = createContext<PizzaContextType>(contextDefault)

const usePizzaContext = () => {
  const {pizzas, sortType, sortTypeChanged} = useContext(PizzaContext)
  return {pizzas, sortType, sortTypeChanged}
}

const PizzaContextProvider = ({children} : ProviderProps) => {

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [sortedPizzas, setSortedPizzas] = useState<Pizza[]>([])
  const [sortType, setSortType] = useState<SortType>(SortType.name)

  useEffect(() => {
    const response = getPizzaData()
    setPizzas(response)
  }, [])

  useEffect(() => {
    setSortedPizzas(sortProduct([...pizzas], sortType))
  }, [pizzas, sortType])

  return (
    <PizzaContext.Provider value={{ pizzas: sortedPizzas, sortType: sortType, sortTypeChanged: setSortType }}>
      {children}
    </PizzaContext.Provider>
  )
}

export { PizzaContextProvider, PizzaContext, usePizzaContext }
