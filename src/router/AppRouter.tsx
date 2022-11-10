import { Route, Routes } from "react-router-dom"
import PizzaDataPage from "../pages/PizzaDataPage"
import PizzaDetailsPage from "../pages/PizzaDetailsPage"
import PizzaFormPage from "../pages/PizzaFormPage"
import PizzaSortingPage from "../pages/PizzaSortingPage"
import { ADD_PIZZA, HOME, PIZZAS, PIZZA_DETAILS } from "./config/routes"

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<PizzaSortingPage />} />
      <Route path={PIZZAS} element={<PizzaDataPage /> } />
      <Route path={PIZZA_DETAILS} element={<PizzaDetailsPage />} />
      <Route path={ADD_PIZZA} element={<PizzaFormPage />} />
    </Routes>
  )
}

export default AppRouter
