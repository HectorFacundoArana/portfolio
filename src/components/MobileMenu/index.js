import { MdClose } from "react-icons/md";
import { useGlobalContext } from '@/contexts/GlobalContext';


const MobileMenu = () => {
    const { toggleMenu } = useGlobalContext();

    function scrollToDiv(id) {
        var div = document.getElementById(id);
        div.scrollIntoView({ behavior: 'smooth' });
    }


    function handleMenu(){
        toggleMenu()
    }

    return(
        <div className="flex w-screen h-[100svh] justify-center items-center ">
            <div className='flex flex-col m-4 h-3/4 w-full bg-black bg-opacity-5 backdrop-blur-xl rounded-2xl border sm:hidden'>
                <button name="Close Menu" onClick={handleMenu} className='flex justify-end p-4'>
                    <MdClose className='w-8 h-8 text-white'/>
                </button>
                <div className='flex flex-col justify-center items-center w-full h-full gap-8 mb-4'>

                    <button onClick={() => {scrollToDiv("about"); toggleMenu()}} name="About Section" className='w-1/2 text-[20px] text-white border-[1px] p-4 rounded-xl'>
                        About
                    </button>
                    <button onClick={() => {scrollToDiv("projects"); toggleMenu()}} name="Projects Section" className='w-1/2 text-[20px] text-white border-[1px] p-4 rounded-xl'>
                        Projects
                    </button>
                    <button onClick={() => {scrollToDiv("profile"); toggleMenu()}} name="Main Section" className='w-1/2 text-[20px] text-white border-[1px] p-4 rounded-xl'>
                        Main
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
