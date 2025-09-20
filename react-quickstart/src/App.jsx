import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){

 const products = [
  { title: 'Cabbage', id: 1},
  { title: 'Lettuce', id: 2},
  { title: 'Tomato', id: 3},
 ]

 const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
 )

 return (
  <>
  <ul>{listItems}</ul>  
  </>
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
