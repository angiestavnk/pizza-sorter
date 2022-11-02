import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;

  &.active {
    color: blue;
  }

  &:hover {
    color: blue;
  }
`
