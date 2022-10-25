import { ReactNode } from "react"

export enum Size {
  Small = 1,
  Medium,
  Large,
  ExtraLarge
}

export type DeliveryTime = 30 | 45 | 60 | 75

export type Ingredient = {
  name: string,
  imgUrl: string
}

export type Pizza = {
  name: string
  price: number,
  size: Size,
  deliveryTime: DeliveryTime,
  ingredients: Ingredient[]
}

export enum SortType {
  name = "name",
  price = "price",
  size = "size",
  deliveryTime = "deliveryTime"
}

export type ProviderProps = {
  children: ReactNode
}

export type SortProduct = (products: Pizza[], sortParam: SortType) => Pizza[]
