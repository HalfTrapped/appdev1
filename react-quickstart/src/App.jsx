import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ItoButton() {
 return (
  <button> Click me</button>
 )
}

function App(){
  return (
    <div className="App">
      <h1>This is a button</h1>
      <ItoButton />
    </div>
  )
}

export default App
