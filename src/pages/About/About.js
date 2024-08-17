const About = () => {
    return(

    <>
        <div className='flex flex-col items-center justify-center sm:mt-10'>
          <div className='m-3'>
            <h1 className='text-white text-[26px] sm:text-[28px] font-extrabold'>About Me</h1>
            <div className='flex h-0.5 w-10 bg-white'></div>
          </div>
        </div>
        <article className='flex flex-col w-full p-4'>
          <div className='flex justify-center items-center'>
            <p className='text-[13px] text-white w-full opacity-80 md:w-3/4 sm:text-[14px] xl:text-[18px]'>
            Hello my name is Facundo,  I am 20 years old.
            I have been developing as a hobby for about 6 years, 4 years ago i started working on independent proejcts where i worked with Lua, Python, Javascript, C++, NodeJS, MySQL, etc.
            These projects were based on the production of utility and security server programs. I am currently studying system engineering
            and i currently learning for web development with React & Next JS
            </p>

          </div>
        </article>
    </>
    )
}

export default About