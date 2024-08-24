"use client"

import { AiFillGithub } from 'react-icons/ai';
import { useGlobalContext } from '@/contexts/GlobalContext';


const Footer = () => {
    const { isMenuOpen } = useGlobalContext();


    return(
        <>
            {!isMenuOpen ? (
            <a href="https://github.com/HectorFacundoArana" className='fixed right-2 bottom-2 lg:m-1 ' target='_blank' rel="noopener noreferrer">
                <AiFillGithub className='h-12 w-12 sm:h-10 sm:w-10 m-2 text-white'/>
            </a>
            ) : (
            <a className='bg-black mb-4 bg-opacity-5 backdrop-blur-xl fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 border rounded-xl p-2  ' href="https://github.com/HectorFacundoArana" target='_blank' rel="noopener noreferrer">
                <div className='flex flex-row gap-2'>
                    <AiFillGithub className='h-10 w-10 sm:h-10 sm:w-10 text-white'/>
                    <p className='text-white font-bold text-[20px] mt-2'>Github</p>
                </div>
            </a>
            )}
        </>
    )
}

export default Footer