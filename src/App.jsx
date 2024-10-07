import React, { createContext, useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'

export const DataContext = createContext(null)

const App = () => {
  const [data, setdata] = useState("important data")
  return (
   
    <DataContext.Provider value={[data, setdata]}>
      <Nav />
      <Header/>
    </DataContext.Provider>
    
  )
}

export default App