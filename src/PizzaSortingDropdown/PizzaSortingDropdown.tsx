import { usePizzaContext } from "../PizzaContext/PizzaContext"
import { SortType } from "../PizzaContext/pizzaContext.types"
import './style.css'

const PizzaSortingDropdown = () => {
  const {sortType, sortTypeChanged } = usePizzaContext();
  
  return (
    <select defaultValue={sortType} onChange={(e) => sortTypeChanged(e.target.value as SortType)}>
      <option value={SortType.name}>Sort by Name</option>
      <option value={SortType.price}>Sort by Price</option>
      <option value={SortType.size}>Sort by Size</option>
      <option value={SortType.deliveryTime}>Sort by Delivery Time</option>
    </select>
  )
}

export default PizzaSortingDropdown