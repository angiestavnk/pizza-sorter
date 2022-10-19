export enum Size {
  Small,
  Medium,
  Large,
  ExtraLarge
}

export type DeliveryTime = 30 | 45 | 60 | 75

export type Ingredients = {
  name: string,
  imgUrl: string
}

export type Pizza = {
  name: string
  price: number,
  size: Size,
  deliveryTime: DeliveryTime,
  ingredients: Ingredients[]
}

export enum SortType {
  name = "name",
  price = "price",
  size = "size",
  deliveryTime = "deliveryTime"
}

export type SortProduct = (products: Pizza[], sortParam: SortType) => Pizza[]
