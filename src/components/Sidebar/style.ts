import { palette } from "@toptal/picasso/utils"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${palette.common.black};
  font-size: 18px;

  &.active {
    color: ${palette.blue.dark};
  }

  &:hover {
    color: ${palette.blue.dark};
  }
`
