import Image from 'next/image'

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Project = ({name, logo, description, github_link, page_link}) => {
  return(
<div className='relative  z-10'>
  <div className='flex flex-row justify-center items-center gap-2 m-1'>
    <Image className='rounded-md w-14 lg:w-20 border' src={logo} alt='logo'/>
    <div className='flex flex-col  w-52 sm:w-3/4 lg:h-20 h-full border border-verde-claro rounded-lg relative text-white'>
      <div className='flex flex-row  w-full h-full font-medium text-[14px] lg:text-[18px] sm:text-[16px] ml-2 pt-1 gap-1 '>
        {name}
        <div className='absolute top-0 right-0 flex flex-row gap-2 mr-2 mt-1'>
          {page_link && (
            <a href={page_link} target='_blank' className='flex p-1 bg-verde-claro  bg-opacity-50 rounded-md'>
              <TbWorld/>
            </a>
          )}
          {github_link && (
            <a href={github_link} target='_blank' className='flex p-1 bg-verde-claro  bg-opacity-50 rounded-md'>
              <FaGithub />
            </a>
          )}
        </div>
      </div>
      <div className='flex h-full p-2 text-[11px] sm:text-[13px] lg:text-[14px]'>
        {description}
      </div>
    </div>
  </div>
</div>

  )
}

export default Project;

