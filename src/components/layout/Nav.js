import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';
const Nav = (props) => {

    return (
        <nav className="navbar">
            <ul className="limite-nav">
                <li><NavLink to="/" className={({isActive}) => isActive ? "activo" :
                undefined}>Home</NavLink></li>
                <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" :
                undefined}>Contacto</NavLink></li>
                <li><NavLink to="/novedades" className={({isActive}) => isActive ? "activo" :
                undefined}>Novedades</NavLink></li>
                <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" :
                undefined}>Nosotros</NavLink></li>
            </ul>
        </nav>
    )  
};

export default Nav;