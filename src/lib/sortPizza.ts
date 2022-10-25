import { SortProduct } from "./pizzaContext.types"

export const sortProduct: SortProduct = (products, sortParam) => {
  return products.sort((a, b) => a[sortParam] > b[sortParam] ? 1 : -1)
}
