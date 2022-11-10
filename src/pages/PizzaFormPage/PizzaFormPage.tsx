import { Button } from "@toptal/picasso"
import { Form } from "react-final-form"
import PizzaFormField from "../../components/PizzaFormField"

type Values = {
  name: string
  id: string
  price: string
  size: string
  deliveryTime: string
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: Values) => {
  await sleep(300)
  alert(JSON.stringify(values, undefined, 2))
  window.location.reload()
}

const required = (value: string) => (value ? undefined : 'This field is required')

const PizzaFormPage = () => {

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <PizzaFormField name="id" validate={required} />
          <PizzaFormField name="name" validate={required} />
          <PizzaFormField name="price" validate={required} type="number"/>
          <PizzaFormField name="size" validate={required} type="number"/>
          <PizzaFormField name="deliveryTime" validate={required} title="Delivery Time" type="number"/>
          <Button type="submit" loading={submitting}>Submit</Button>
        </form>
      )}
    </Form>
  )
}

export default PizzaFormPage
