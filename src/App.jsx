
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './compoments/NavItems'
import Footer from './compoments/Footer'

function App() {
 
  return (
    <>
      <NavItems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
