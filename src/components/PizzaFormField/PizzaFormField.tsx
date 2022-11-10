import { Container, Input } from "@toptal/picasso"
import { Field } from "react-final-form"
import { ErrorMessage, FieldContainer, StyledLabel } from "./style"

type Props = {
  name: string
  validate: (val: string) => string | undefined
  type?: string
  title?: string
}

const PizzaFormField = ({ name, validate, type, title }: Props) => {
  return (
    <Field name={name} validate={validate}>
    {({ input, meta }) => (
      <FieldContainer>
        <Container flex justifyContent="space-between">
          <StyledLabel>Pizza {title ? title : name}</StyledLabel>
          <Input type={type} {...input} />
        </Container>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
      </FieldContainer>
    )}
  </Field>
  )
}

export default PizzaFormField
