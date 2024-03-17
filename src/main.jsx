import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from "./components/footer/Footer";

const subdirectory = '/villa-task1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={subdirectory}>
    <App />
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
