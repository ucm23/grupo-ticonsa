//import { Switch,Route } from "wouter"
import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index"
import History from "./pages/History"
import './styles/styles.css'
import Systems from "./pages/Systems"
import Products from "./pages/Products"
import Porfolio from "./pages/Porfolio"
import Contact from "./pages/Contact"
import Legal from "./pages/Legal"
import Privacity from "./pages/Privacity"
import Contacts from "./pages/Contacts"
import Services from "./pages/Services";
import Documents from "./pages/Documents";
import Plants from "./pages/Plants";
import Contacts2 from "./pages/Contacts2";

function App() {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<Index />} />
            <Route path="/historia" element={<History />} />
            <Route path="/contacto" element={<Contacts2 />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/portafolio" element={<Porfolio />} />
            <Route path="/prefabricado" element={<Systems />} />


            <Route path="/plant-campeche" element={<Plants id={1} />} />            
            <Route path="/plant-progreso" element={<Plants id={2} />} />
            <Route path="/plant-cancun" element={<Plants id={3} />} />
            <Route path="/plant-teotihuacan" element={<Plants id={4} />} />
            <Route path="/plant-morelos" element={<Plants id={5} />} />

            <Route path="/infraestructura" element={<Services type={'infraestructura'} />} />
            <Route path="/edificacion" element={<Services type={'edificacion'} />} />
            <Route path="/transporte" element={<Services type={'transporte'} />} />
            <Route path="/montaje" element={<Services type={'montaje'} />} />
            <Route path="/supervision" element={<Services type={'supervision'} />} />

            <Route path="/document_cv" element={<Documents type={'cv'} />} />
            <Route path="/document_presencia" element={<Documents type={'presencia'} />} />

            <Route path="/legal" element={<Legal />} />
            <Route path="/privacity" element={<Privacity />} />
        </Routes>
    )
}

export default App
