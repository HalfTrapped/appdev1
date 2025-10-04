import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import "./ /css/animated.css";
import "./ /css/fontawesome.css";
import "./ /css/owl.css";
import "./ /css/templatemo-chain-app-dev.css";
import 'bootstrap/dist/css/bootstrap.min.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
