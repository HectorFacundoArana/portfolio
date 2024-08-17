"use client"

import { CgMenuRight } from 'react-icons/cg';

import { useGlobalContext } from '@/contexts/GlobalContext';

import MobileMenu from '../MobileMenu';


const Navbar = () => {
    const { isMenuOpen, toggleMenu } = useGlobalContext();

    function scrollToDiv(id) {
        var div = document.getElementById(id);
        div.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <nav className='flex items-center justify-center h-full w-screen'>
            <div className='absolute right-2 top-2 sm:hidden '>
                {!isMenuOpen && (
                    <button name="Toggle Menu" onClick={toggleMenu}>
                        <CgMenuRight className='h-10 w-10 text-white m-2'/>
                    </button>
                )}
            </div>
            
            {isMenuOpen &&  (
                <MobileMenu/>
            )}

            <div className='hidden sm:block fixed right-0 top-0  text-navbar-text font-light text-sm sm:text-md md:text-lg lg:text-base' >
                <button onClick={() => {scrollToDiv("about")}} name="About Section Nav" className='hover:text-white hover:text-xl transition-all m-4'>
                About
                </button>

                <button onClick={() => {scrollToDiv("projects")}} name='Projects Section Nav' className='hover:text-white hover:text-xl transition-all m-4'>
                Projects
                </button>

                <button onClick={() => {scrollToDiv("profile")}} name='Main Section Nav' className='hover:text-white hover:text-xl transition-all m-4'>
                    Main
                </button>
            </div>
        </nav>
    )
}

export default Navbar
