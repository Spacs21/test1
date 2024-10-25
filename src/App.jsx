import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Products from './components/products/Products'
import About from './components/about/About'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="color">
      <Header/>
      <Hero/>
    </div>
    <Category/>
    <Products/>
    <About/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App
