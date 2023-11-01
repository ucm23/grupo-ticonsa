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

            <Route path="/plant-teotihuacan" component={Index} />
            <Route path="/plant-morelos" component={Index} />
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
