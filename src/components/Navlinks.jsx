import React, { useContext } from 'react'
import { DataContext } from '../App'

const Navlinks = () => {
  const [data] = useContext(DataContext) // Destructure array
  
  return (
    <div>
      <h2>Navlinks: {data}</h2>
    </div>
  )
}

export default Navlinks
