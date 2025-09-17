
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Products from './components/Products'
import Servisi from './components/Servisi'
import {  Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Products" element={<Products/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/Servisi" element={<Servisi/>} />
    </Routes>
    </div>
  )
}

export default App
