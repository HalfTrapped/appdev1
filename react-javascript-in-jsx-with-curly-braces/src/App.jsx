import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}


function App() {
  const name = "Gregorio Y. Zara"
  return (
    <>
      <h1>To Do List for {formatDate(today)}</h1>
    </>
  );
}

export default App
