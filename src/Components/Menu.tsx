import { Link, NavLink, useLocation } from "react-router-dom"
import { routes } from "../Routes/routes"

const Menu = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            routes.map(nav =>
                                <li key={nav.id} className="nav-item active mx-3">
                                            <NavLink className="text-white" to={nav.path}>{nav.name}</NavLink>
                                </li>)
                        }
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav >
        </div >
    )
}

export default Menu
