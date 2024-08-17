

import { IoIosPin } from 'react-icons/io';
import {FaPython} from 'react-icons/fa'
import {SiJavascript, SiCplusplus,SiLua, SiMysql} from 'react-icons/si'
import Project from '@/components/Projects/Projects';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Ibiza from '../../public/assets/ibiza.webp'
import SteamIDFinder from '../../public/assets/steamidfinder.webp'
import About from '@/pages/About/About';

export default function Home() {

  return (
    <main className='flex flex-col w-full cursor-default'>

      <section className="flex flex-col w-full h-screen  bg-verde-oscuro bg-gradient-to-b from-degrade-top to-verde-oscuro">
        <div className='fixed top-0 right-0 z-50 '>
          <Navbar/>
        </div>

        <article id="profile" className='flex flex-col justify-center h-full gap-1 m-auto'>

          <span className='text-verde-claro font-bold text-opacity-70 text-[20px] sm:text-[15px] md:text-[15px]'>
            Hi, my name is
          </span>

          <span className='text-white font-extrabold text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[80px] hover:text-[90px] transition-all'>
            Facundo Arana
          </span>
          
          <div className='flex flex-row gap-1 pb-2'>
            <IoIosPin className='h-8 w-7 hover:h-8 hover:w-7 text-verde-claro sm:h-7 sm:w-6 lg:h-7 lg:w-6 animate-pulse'/>

            <span className='font-medium text-opacity-60 text-[20px] sm:text-[20px] lg:text-[20px] text-white animate-pulse'>
            Buenos Aires, La Plata
            </span>

          </div>
        </article>
      </section>
      
      <section id="projects" className='flex flex-col w-full h-screen bg-verde-oscuro gap-8'>
        <div className='flex flex-col w-full  items-center justify-top gap-4'>
            <div className='m-6'>
              <h1 className=' text-[26px] font-extrabold sm:text-[28px] text-white'>Projects</h1>
              <div className='flex h-0.5 w-8  bg-white'></div>
            </div>
            <div className='flex flex-row gap-3'>
              <FaPython className='text-cyan-600 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9'/>
              <SiJavascript className='text-yellow-400 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9'/>
              <SiCplusplus className='text-purple-800 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9'/>
              <SiLua className='text-cyan-600 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9'/>
              <SiMysql className='text-blue-600 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9'/>
            </div>
        </div>

        <article className='flex flex-col h-full sm:grid sm:grid-cols-2 sm:p-4 gap-2 overflow-hidden mb-12'>
          <Project name="IbizaRP" description="A web page for a FiveM server" logo={Ibiza} page_link="https://ibizarp.net/"/>
          <Project name="SteamID Finder" description="Get steamid by steam profile" logo={SteamIDFinder} page_link="facundoarana.github.io/steamid-finder/"/>
        </article>

      </section>

      <section id="about" className='flex flex-col w-full h-screen bg-verde-oscuro'>
        <About/>
      </section>



      <footer>
        <Footer/>
      </footer>
    </main>
 
  )
}
