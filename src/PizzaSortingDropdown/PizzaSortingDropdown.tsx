import { ChangeEventHandler, useRef } from "react"
import { usePizzaContext } from "../PizzaContext/PizzaContext"
import { SortType } from "../PizzaContext/pizzaContext.types"
import './style.css'

const PizzaSortingDropdown = () => {
  const {sortType, sortTypeChanged } = usePizzaContext()

  const ref = useRef<HTMLSelectElement>(null)
  const handleChange = () => {
    if(ref.current) {
      sortTypeChanged(ref.current.value as SortType)
    }
  }
  
  return (
    <select 
      defaultValue={sortType} 
      onChange={handleChange}
      ref={ref}
    >
      <option value={SortType.name}>Sort by Name</option>
      <option value={SortType.price}>Sort by Price</option>
      <option value={SortType.size}>Sort by Size</option>
      <option value={SortType.deliveryTime}>Sort by Delivery Time</option>
    </select>
  )
}

export default PizzaSortingDropdown