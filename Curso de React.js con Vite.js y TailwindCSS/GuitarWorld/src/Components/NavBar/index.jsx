import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Guitar Empire
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/guitars'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                        Guitars
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/basses'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                        Basses
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/drums'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                        Drums
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/mics'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                        Mics
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    rainesyahir@outlook.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined}
                        >
                            Sign In
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