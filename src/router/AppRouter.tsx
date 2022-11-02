import { Route, Routes } from "react-router-dom"
import PizzaDataPage from "../pages/PizzaDataPage"
import PizzaDetailsPage from "../pages/PizzaDetailsPage"
import PizzaSortingPage from "../pages/PizzaSortingPage"

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PizzaSortingPage />} />
      <Route path='/pizzas' element={<PizzaDataPage /> } />
      <Route path='/pizzas/:id' element={<PizzaDetailsPage />} />
    </Routes>
  )
}

export default AppRouter
