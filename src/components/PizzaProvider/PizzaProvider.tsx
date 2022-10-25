import { ReactNode } from 'react'
import { PizzaContext } from '../../lib/PizzaContext'
import { useData } from '../../lib/useData'

export type PizzaProviderProps = {
  children: ReactNode
}

const PizzaProvider = ({ children }: PizzaProviderProps) => {
  return (
    <PizzaContext.Provider value={useData()}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider