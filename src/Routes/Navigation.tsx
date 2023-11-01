import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import Menu from "../Components/Menu"



const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          {
            routes.map(r => <Route path={r.path} Component={r.Component}></Route>)
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
