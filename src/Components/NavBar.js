import { Link } from "react-router-dom"

export const NavBar = () => {

    return (
        <div>
            <nav className="navbar">
                <Link className="link" to="/Profile">Profile</Link>
                <Link className="link" to="/Inventory">Inventory</Link>
                <Link className="link" to="/Orders">Orders</Link>
                <Link className="link" to="/login">Logout</Link>
            </nav>
        </div>
    )
}