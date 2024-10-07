import React, { useContext } from 'react'
import { DataContext } from '../App'

const Header = () => {
  const [data] = useContext(DataContext) // Destructure array
  
  console.log(data)
  return (
    <div>
      <h1>Header's: {data}</h1>
    </div>
  )
}

export default Header
