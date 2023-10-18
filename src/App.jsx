import { Switch,Route } from "wouter"
import Index from "./pages/Index"
import History from "./pages/History"
import './styles/styles.css'
import Systems from "./pages/Systems"
import Products from "./pages/Products"
import Porfolio from "./pages/Porfolio"
import Contact from "./pages/Contact"
import Plantas from "./pages/Plantas"

function App() {
    return (
        <Switch>
            <Route path="/" component={Index} />
            <Route path="/historia" component={History} />
            <Route path="/contacto" component={Contact} />
            <Route path="/productos" component={Products} />
            <Route path="/portafolio" component={Porfolio} />
            <Route path="/prefabricado" component={Systems} />
            <Route path="/plantas" component={Plantas} />
        </Switch>
    )
}

export default App
