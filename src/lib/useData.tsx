import { useEffect, useState } from "react"
import { Pizza, SortType } from "./pizzaContext.types"
import { getPizzaData } from "./pizzaData"
import { sortProduct } from "./sortPizza"

export const useData = (
  initialItems = getPizzaData(),
  sort = sortProduct,
  defaultSortType = SortType.name
) => {
  const [pizzas] = useState(initialItems);
  const [sortedPizzas, setSortedPizzas] = useState<Pizza[]>([])
  const [sortType, setSortType] = useState<SortType>(defaultSortType)

  const sortTypeChanged = (newSortType: SortType) => {
    setSortType(newSortType);
    setSortedPizzas(sort([...pizzas], sortType))
  }

  useEffect(() => {
    setSortedPizzas(sort([...pizzas], sortType))
  }, [pizzas, sortType])

  return {
    sortType,
    sortedPizzas: sortedPizzas,
    unsortedPizzas: pizzas,
    sortTypeChanged
  }
}