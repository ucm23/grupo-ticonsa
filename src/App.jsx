//import { Switch,Route } from "wouter"
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index"
import History from "./pages/History"
import './styles/styles.css'
import Systems from "./pages/Systems"
import Products from "./pages/Products"
import Porfolio from "./pages/Porfolio"
import Contact from "./pages/Contact"
import Plantas from "./pages/Plantas"
import Legal from "./pages/Legal"
import Privacity from "./pages/Privacity"
import Contacts from "./pages/Contacts"
import Teotihuacan from "./pages/Teotihuacan"
import Morelos from "./pages/Morelos"
import Campeche from "./pages/Campeche"
import Cancun from "./pages/Cancun"
import Yucatan from "./pages/Yucatan"
import Services from "./pages/Services";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/historia" element={<History />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/portafolio" element={<Porfolio />} />
            <Route path="/prefabricado" element={<Systems />} />

            <Route path="/plant-teotihuacan" element={<Teotihuacan />} />
            <Route path="/plant-morelos" element={<Morelos />} />
            <Route path="/plant-campeche" element={<Campeche />} />
            <Route path="/plant-cancun" element={<Cancun />} />
            <Route path="/plant-progreso" element={<Yucatan />} />

            <Route path="/infraestructura" element={<Services type={'infraestructura'} />} />
            <Route path="/edificacion" element={<Services type={'edificacion'} />} />
            <Route path="/transporte" element={<Services type={'transporte'} />} />
            <Route path="/montaje" element={<Services type={'montaje'} />} />
            <Route path="/supervision" element={<Services type={'supervision'} />} />

            <Route path="/legal" element={<Legal />} />
            <Route path="/privacity" element={<Privacity />} />
        </Routes>
    )
}

export default App
