
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Products from './components/Products'
import {  Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Products" element={<Products/>} />
      <Route path="/Product" element={<Product/>} />
    </Routes>
    </div>
  )
}

export default App
