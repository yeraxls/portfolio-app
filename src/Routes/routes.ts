import { JsxElement } from "typescript"
import { type } from "os"
import Dashboard from "../Components/Dashboard/Dashboard"
import Contacto from "../Components/Contacto/Contacto"


interface routes {
    id: number,
    to: string,
    path: string,
    name: string,
    Component: () => JSX.Element
}


export const routes: routes[] = [
    { id: 1, to: "/", path: "/", name:"Inicio", Component: Dashboard },
    { id: 2, to: "/contacto", path: "/contacto", name:"Contacto", Component: Contacto }
    
]