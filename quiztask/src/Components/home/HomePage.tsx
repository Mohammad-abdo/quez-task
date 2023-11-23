import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, Divider } from '@mui/material'
import { TypeAnimation } from "react-type-animation";
import classes from './HomePAge.module.css'
const HomePage = () => {


    const handelAuth=()=>{
        localStorage.setItem("token","loged")
    }
  return (
    <Box  className={classes.mainBg}>
    <div className="py-2 w-full flex items-center justify-between bg-[#fff4] shadow">
        <div className="logo text-xl md:text-6xl text-[#000000] font-bold  mx-10">
            Colego
        </div>
        <div className="signin mx-10">
          
        <a href='/home' onClick={handelAuth} className=' text-xl rounded-2xl md:text-4xl text-darck hover:text-[#65d1ff] font-bold cursor-pointer'>  <PersonIcon/> sign in</a>
        

        </div>
    </div>
<Divider/>
        <Container  className='h-1/2'>
            <div className=' my-10 w-full h-full flex-col  flex items-center justify-center'>

                <span className="text-4xl md:text-6xl lg:text-8xl  w-full block font-bold text-[#000000] "> 
                <span className='mx-3'>Colego</span>
                <TypeAnimation
              sequence={[
                1000 ,
                " Egyption International Language Schools",
                1000 ,
                " Egyption International Language Schools",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /></span>

            <div className='mt-20 flex items-center justify-center w-full'>

              <button className="py-2 px-5 bg-purple-500 text-white font-semibold hover:text-black rounded-2xl text-lg md:text-2xl"> Jion us Now</button>
            </div>

            </div>
        </Container>
      
    </Box>
  )
}

export default HomePage
