
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './compoments/NavItems'

function App() {
 
  return (
    <>
      <NavItems/>
      <Outlet/>
    </>
  )
}

export default App
