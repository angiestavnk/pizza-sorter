import { Typography } from "@toptal/picasso"
import PizzaIngredients from "../../components/PizzaIngredients"
import PizzaSortingDropdown from "../../components/PizzaSortingDropdown"
import Pizza from "../../components/Pizza"
import { PizzaSortingHeading } from "./style"

const PizzaSortingPage = () => {
  return (
    <>
      <PizzaSortingHeading variant='heading' size='xlarge'>
        Select your Pizza
      </PizzaSortingHeading>
      <PizzaSortingDropdown />
      <Pizza />
      <PizzaIngredients />
    </>
  )
}

export default PizzaSortingPage