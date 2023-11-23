import { Avatar, Box, Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import  Typography  from '@mui/material/Typography';
import HourglassBottomSharpIcon from '@mui/icons-material/HourglassBottomSharp';
import classes from './Advertisements.module.css'


import instance from './../../AxiosConfig/instance';
const Advertisements = () => {


  const fetchquiz =  async () => {
    const response = await instance.get(
        "/quiz");
      console.log(response.data.data);
      return response.data.data;
    };
    fetchquiz()
  return (
<Box >
    <Box sx={{width:"96%",margin:" 0 auto"}}>
    <Grid container spacing={2}  columns={16}>
  <Grid item xs={16} className={classes.topSection}>
  < Box  >

  <Grid container spacing={2} columns={16}>
  <Grid item xs={16} md={8} sm={16} >
    <h1 className={classes.h1}>Exam Time</h1>
    <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus!
    </Typography >
    <Typography sx={{margin:"20px 0 "}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, repellendus!
    </Typography >
    <Button variant="contained" className={classes.viewButton} sx={{marginY:"10px"}}>View exam tips</Button>
    </Grid>

  <Grid item xs={8}  md={8} sm={16}>
    <img src="/images/school.png" alt="" className=' h-32 w-full ' style={{width:"100%" ,height:"30vh",objectFit:"cover"}} />
    </Grid>

    </Grid>

    </Box>

  </Grid>

  {/* bottom section  */}
  <Grid item xs={16} sm={16} className=''>
  < Box  >

  <Grid container spacing={2}  columns={16} >
  <Grid item xs={11} md={11} sm={16} className='bg-white w-full ' sx={{margin:{xs:'20px 0 20px 0 ',md:'0 0 0 0'}}} style={{borderRadius:"15px"}} >
<Box className="flex bg-purple items-center justify-between ">
  <div>
  <span className='text-xl text-black font-semibold'>Announcements</span>
  <p className='text-sm text-[#707070]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  </div>
  <Button className='text-xl text-[#4994bd] rounded-full'>All</Button>
</Box>
<Box className=" flex flex-col items-center justify-around mt-5">
  <Box className="flex items-center justify-between ">
     <div className="flex items-center justify-between w-1/4 border-r-2 border-[#00000094] ">
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
     <div className='mx-5'>
      <Typography className=''>Ahmad Salah</Typography>
      <Typography className='text-sm text-[#616161]'> Math</Typography>
     </div>
     </div>
     <div className='mx-2'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repudiandae sapiente labore ratione od
     </div>

     </Box>
</Box>
<Box className=" flex flex-col items-center justify-around mt-5">
  <Box className="flex items-center justify-between ">
     <div className="flex items-center justify-between w-1/4 border-r-2 border-[#00000094] ">
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
     <div className='mx-5'>
      <Typography className=''>Ahmad Salah</Typography>
      <Typography className='text-sm text-[#616161]'> Math</Typography>
     </div>
     </div>
     <div className='mx-2'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repudiandae sapiente labore ratione od
     </div>

     </Box>
</Box>
<Box className=" flex flex-col items-center justify-around mt-5">
  <Box className="flex items-center justify-between ">
     <div className="flex items-center justify-between w-1/4 border-r-2 border-[#00000094] ">
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
     <div className='mx-5'>
      <Typography className=''>Ahmad Salah</Typography>
      <Typography className='text-sm text-[#616161]'> Math</Typography>
     </div>
     </div>
     <div className='mx-2'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repudiandae sapiente labore ratione od
     </div>

     </Box>
</Box>
<Box className=" flex flex-col items-center justify-around mt-5 mb-10">
  <Box className="flex items-center justify-between ">
     <div className="flex items-center justify-between w-1/4 border-r-2 border-[#00000094] ">
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
     <div className='mx-5'>
      <Typography className=''>Ahmad Salah</Typography>
      <Typography className='text-sm text-[#616161]'> Math</Typography>
     </div>
     </div>
     <div className='mx-2'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repudiandae sapiente labore ratione od
     </div>

     </Box>
</Box>
    </Grid>

  <Grid item xs={4} md={4} sm={16} sx={{margin:{xs:'20px 0 20px 0 ', md:'0 0 0 40px'}}} className='bg-white  ' style={{borderRadius:"15px", overflowY:"auto",height:"45vh"}} >
  <Box className="flex bg-purple items-center justify-between ">
  <div>
  <span className='text-xl text-black font-semibold'>What's due </span>
  </div>
  
  <Button className='text-xl text-[#4994bd] rounded-full'>All</Button>
</Box>
<Box><span className='text-sm text-[#707070]'>Lorem ipsum dolor sit.</span></Box>
    <Box className="">

      <div className="flex flex-col items-start my-5 justify-center border-b-2 boeder-[#000] ">
        <Box> <HourglassBottomSharpIcon className='text-[#4994bd] ' sx={{fontSize:"33px"}} /> Unit 2 quiz</Box>
        <div className='mb-1 mt-3 ' > Course : <span className="mx-2">ay haga</span></div >
        <div className='my-1' > Topic : <span className="mx-2">ay haga</span></div >
        <div className='my-1' > Date : <span className="mx-2">ay haga</span></div>
        <div className="my-3 flex w-full items-center justify-center">
        <button  className=" w-full mx-5 bg-cyan-400 ">START QUIZ</button>

        </div>
      </div>

    </Box>
    <Box className="border-b-2 boeder-[#000]">

      <div className="flex flex-col items-start my-5">
        <Box> <HourglassBottomSharpIcon className='text-[#4994bd] ' sx={{fontSize:"33px"}} /> Unit 2 quiz</Box>
        <div className='mb-1 mt-3 ' > Course : <span className="mx-2">ay haga</span></div >
        <div className='my-1' > Topic : <span className="mx-2">ay haga</span></div >
        <div className='my-1' > Date : <span className="mx-2">ay haga</span></div>
        <div className="my-3 flex w-full items-center justify-center">
        <button  className=" w-full mx-5 bg-cyan-400 ">START QUIZ</button>

        </div>
      </div>

    </Box>
    </Grid>

    </Grid>

    </Box>
 

  </Grid>
</Grid>
    </Box>
</Box>
  )
}

export default Advertisements


