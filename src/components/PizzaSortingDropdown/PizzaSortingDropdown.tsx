import { Container, Select } from "@toptal/picasso"
import { usePizzaContext } from "../../lib/PizzaContext"
import { SortType } from "../../lib/pizzaContext.types"

const PizzaSortingDropdown = () => {
  const {sortType, sortTypeChanged } = usePizzaContext()
  
  return (
    <Container top='large' bottom='large'>
      <Select
        size='large'
        options={OPTIONS}
        value={sortType}
        width='auto'
        onChange={e => sortTypeChanged(e.target.value as SortType)}
      />
    </Container>
  )
}

const OPTIONS = [
  { value: SortType.name, text: 'Sort by Name' },
  { value: SortType.price, text: 'Sort by Price' },
  { value: SortType.size, text: 'Sort by Size' },
  { value: SortType.deliveryTime, text: 'Sort by Delivery Time' },
]

export default PizzaSortingDropdown