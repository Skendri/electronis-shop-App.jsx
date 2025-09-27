import React from 'react'
import Suporti from './SuportiKlientit-Page/FirstComponent/Suporti'
import Navbar from './Home-page/Navbar/Navbar'
import Footer from './Home-page/Footer/Footer'

if(Suporti) {
    console.log("SuportiKlientit component is imported successfully.");
} else {
    console.error("Failed to import SuportiKlientit component.");
}

const SuportiKlientit = () => {
  return (
    <div>
        <Navbar/>

        <Suporti/>

        <Footer/>
    </div>
  )
}

export default SuportiKlientit