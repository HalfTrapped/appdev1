import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){

 function handleClick(){
  alert('click')
 }

 return (
  <button onClick={handleClick}>
    Click me
  </button>
 )

  /*return (
    <div>
      {products.map(product => {
        <li>(product.title)</li>
      })}
    </div>
  )*/
    
  
 
}

 

export default App
