import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton({count, onClick}){

  return (
    <button onClick={onClick}>
      You have clicked {count} times
    </button>
  )
}

function App(){
  const [count, setCount] = useState(0);
  
 function handleClick() {
   setCount(count + 1);
 }
  
 return (
  <>
    <h1> Counters that update separately</h1>
    <MyButton count={count} onClick = {handleClick}/>
    <MyButton count={count} onClick = {handleClick}/>
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
