import { Image } from "@toptal/picasso"
import { useLocation, useNavigate } from "react-router-dom"
import { usePizzaContext } from "../../lib/PizzaContext"
import { PizaItemContainer, PizzaDataGrid, PizzaName } from "./style"

const PizzaDataPage = () => {
  const { unsortedPizzas } = usePizzaContext()
  const navigate = useNavigate()
  const location = useLocation()

  if (!unsortedPizzas.length) {
    return null
  }

  return (
    <PizzaDataGrid>
      {
        unsortedPizzas.map(item => (
          <PizaItemContainer
            key={item.id}
            onClick={() => navigate(`${location.pathname}/${item.id}`)}
            small={6}
          >
            <PizzaName>
              {item.name}
            </PizzaName>
            <Image
              src={item.img}
              alt={item.name}
              width='100%'
              height='80%'
            />
          </PizaItemContainer>
        ))
      }
    </PizzaDataGrid>
  )
}

export default PizzaDataPage
