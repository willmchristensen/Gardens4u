import './NavBar.css';
import {NavLink} from 'react-router-dom';

function NavBar(){

    return (
        <nav className='nav-list-container'>
            <ul 
                className='nav-list'
            >
                <li className='nav-item'>
                    <NavLink
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/gardens"
                    >
                        Gardens
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/plants"
                    >
                        Plants
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;