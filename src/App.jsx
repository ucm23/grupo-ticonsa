import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index"
import History from "./pages/History"
import './styles/styles.css'
import Systems from "./pages/Systems"
import Products from "./pages/Products"
import Porfolio from "./pages/Porfolio"
import Legal from "./pages/Legal"
import Privacity from "./pages/Privacity"
import Services from "./pages/Services";
import Documents from "./pages/Documents";
import Plants from "./pages/Plants";
import Contacts2 from "./pages/Contacts2";
import Index_ from "./pages/Index_";

function App() {
    return (
        <Routes>
            <Route index element={<Index_ />} />
            <Route path="*" element={<Index_ />} />
            {/*
            <Route path="/historia" element={<History />} />
            <Route path="/contacto" element={<Contacts2 />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/portafolio" element={<Porfolio />} />
            <Route path="/prefabricado" element={<Systems />} />


            <Route path="/plant-campeche" element={<Plants id={1} />} />            
            <Route path="/plant-progreso" element={<Plants id={2} />} />
            <Route path="/plant-cancun" element={<Plants id={3} />} />
            <Route path="/plant-teotihuacan" element={<Plants id={4} />} />
            <Route path="/plant-morelos" element={<Plants id={5} />} />

            <Route path="/infraestructura" element={<Services id={1} />} />
            <Route path="/edificacion" element={<Services id={2} />} />
            <Route path="/transporte" element={<Services id={3} />} />
            <Route path="/montaje" element={<Services id={5} />} />
            <Route path="/supervision" element={<Services id={5} />} />

            <Route path="/document_cv" element={<Documents type={'cv'} />} />
            <Route path="/document_presencia" element={<Documents type={'presencia'} />} />

            <Route path="/legal" element={<Legal />} />
            <Route path="/privacity" element={<Privacity />} />
    */}
        </Routes>
    )
}
export default App
