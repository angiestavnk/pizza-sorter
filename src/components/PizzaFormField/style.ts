
import { palette } from "@toptal/picasso/utils"
import styled from "styled-components"

export const FieldContainer = styled.div`
  margin-bottom: 12px;
`

export const ErrorMessage = styled.div`
  color: ${palette.red.main};
  display: flex;
  justify-content: center;
`

export const StyledLabel = styled.label`
  margin-right: 12px;
`
