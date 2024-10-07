import React, { useContext } from 'react'
import { DataContext } from '../App'
import Navlinks from './Navlinks'

const Nav = () => {
  const [data, setData] = useContext(DataContext)
  
  return (
    <div>
      <p>Nav's: {data}</p>
      <Navlinks/>
    </div>
  )
}

export default Nav
