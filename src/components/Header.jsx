import {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    //State to toggle the Mabile Menu
    const[isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <header className='bg-brandBlack border-b border-brandGreen sticky top-0 z-50'>
            <nav className='max-w-7xl mx-auto px-4 sm-px-6 lg-px-8'>
                <div className='flex items-center justify-between h-16'>

                    {/* logo */}
                    <Link to ="/" className='flex-shrink-0 flex items-center'>
                        <h1 className='text-xl md-text-2xl font-bold text-white tracking-wider'>
                            INK & <span className='text-brandLightGreen'>EMERALD</span>
                        </h1>
                    </Link>

                    {/* Desktop Nav (hidden on mobile) */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-8'>
                            <Link to="/" className='text-brandGray hover:text-white px-3 py-2 rounded-md font-medium transition duration-200'>
                                Home
                            </Link>
                            <Link to="/design-lab" className='text-brandLightGreen hover:text-white border border-brandGreen hover:bg-brandGreen px-4 py-2 rounded-md font-medium transition duration-200'>
                                Start Designing
                            </Link>
                            <Link to="/about" className='text-brandGray hover:text-white px-3 py-2 rounded-md font-medium transition duration-200'>
                                About
                            </Link>
                        </div>
                    </div>

                    {/* Icons and Hamburger */}
                    <div className='flex items-center gap-4 md:gap-6'>
                        {/* Cart Icon always visible */}
                        <Link to="/cart" className='relative text-brandGray hover:text-white transition'>
                            <FaShoppingCart className='text-xl md:text-2xl'/>
                            <span className='absolute -top-2 -right-2 bg-brandLightGreen text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                0
                            </span>
                        </Link>

                        {/* User Icon (Desktop: Text+icon, Moble: Icon only) */}
                        <Link to="/login" className='hidden md:flex text-brandGray hover:text-white items-center space-x-1 teansition'>
                            <FaUser className='text-xl'/>
                            <span>Sign In</span>
                        </Link>

                        {/* Mobile Menu Button(hidden on desktop) */}
                        <div className='md:hidden flex items-center'>
                            <button onClick={toggleMenu} className='text-brandGray hover:text-white focus:outline-none'>
                                {isOpen ? <FaTimes className='text-2xl'/> : <FaBars className='text-2xl'/>}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown , logic-> If 'isOpen' is true, show, otherwise hide*/}
            {isOpen && (
                <div className="md:hidden bg-brandGray border-t border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className='text-gray-300 hover:text-white hover:bg-brandGreen block px-3 py-2 rounded-md text-base font-medium'
                            onClick={toggleMenu} //close menu
                        >
                            Home
                        </Link>
                        <Link
                            to="/design-lab"
                            className='text-brandLightGreen hover:text-white hover:bg-brandGreen block px-3 py-2 rounded-md text-base font-bold'
                            onClick={toggleMenu}
                        >
                            Start Designing
                        </Link>
                        <Link
                            to="/login"
                            className='text-gray-300 hover:text-white hover:bg-brandGreen block px-3 py-2 rounded-md text-base font-medium'
                            onClick={toggleMenu}
                        >
                            Sign In / Account
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header