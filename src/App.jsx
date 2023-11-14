import { Switch,Route } from "wouter"
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

function App() {
    return (
        <Switch>
            <Route path="/" component={Index} />
            <Route path="/historia" component={History} />
            <Route path="/contacto" component={Contact} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/productos" component={Products} />
            <Route path="/portafolio" component={Porfolio} />
            <Route path="/prefabricado" component={Systems} />

            <Route path="/plant-teotihuacan" component={Teotihuacan} />
            <Route path="/plant-morelos" component={Morelos} />
            <Route path="/plant-campeche" component={Campeche} />
            <Route path="/plant-cancun" component={Cancun} />
            <Route path="/plant-progreso" component={Yucatan} />

            <Route path="/infraestructura" component={Index} />
            <Route path="/edificacion" component={Index} />
            <Route path="/transporte" component={Index} />
            <Route path="/montaje" component={Index} />
            <Route path="/supervision" component={Index} />

            <Route path="/legal" component={Legal} />
            <Route path="/privacity" component={Privacity} />
        </Switch>
    )
}

export default App
