import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                            Guitar Empire
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/guitars'>
                            Guitars
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/basses'>
                            Basses
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/drums'>
                            Drums
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cics'>
                            Mics
                    </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    rainesyahir@outlook.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                            My Account
                    </NavLink>
                </li>
                <li>
                    🛒          
                </li>
            </ul>
        </nav>
    )
}

export default Navbar