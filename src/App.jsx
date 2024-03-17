import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetailes from "./pages/PropertyDetails"; 
import ContactUs from './pages/ContactUs'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/properties"  element={<Properties/>}/>
        <Route path="/property-details"  element={<PropertyDetailes/>}/>
        <Route path="/contact-us"  element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
