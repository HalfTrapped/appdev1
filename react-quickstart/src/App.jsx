import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let content;

if (True) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

function AdminPanel() {
  return <h1>Welcome, Admin!</h1>;
}

function LoginForm() {
  return <h1>Please log in to continue.</h1>;
}

function App(){
   return (
    <div>
      {content}
    </div>
    )
 
}

export default App
