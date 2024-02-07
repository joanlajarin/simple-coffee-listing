import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CollectionCard from './components/CollectionCard/CollectionCard'
import headerImg from '../public/images/bg-cafe.jpg'

function App() {
  return (
    <> 
      <div className='div-header'>
        <img className='header-img' src={headerImg}></img>
      </div> 
      <CollectionCard/>
    </>
  )
}

export default App
