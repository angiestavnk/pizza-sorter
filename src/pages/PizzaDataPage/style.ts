import { Grid } from "@toptal/picasso"
import GridItem from "@toptal/picasso/GridItem/GridItem"
import styled from "styled-components"

export const PizzaName = styled.div`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: bold;
`

export const PizaItemContainer = styled(GridItem)`
  cursor: pointer;
`
export const PizzaDataGrid = styled(Grid)`
  align-items: normal;
`
