import { Routes,Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import AllProducts from './pages/AllProducts'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/all-products' element={<AllProducts/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/About' element={<About/>}/>

    </Routes>
    </>
  )
}

export default App
