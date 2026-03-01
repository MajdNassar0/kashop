import { Box, ButtonBase, TextField, Typography } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'

function Register() {
  return (
   <>
   <Box className='register-form' sx={{display:'flex' ,justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
    <Typography variant='h3' sx={{marginTop:'50px', marginBottom:'20px'}}>Register Page</Typography>
    {/* حتى اخلي البوتوم الويدث اللي الها على قدها بعمل هيك في البوكس alignItems:'center */}
    <Box component={'form'} sx={{display:'flex' ,flexDirection:'column' , width:'50%' , gap:'10px' }}>
      {/* النيم لازم نلزم فيه في ملف الباك من api نفس الاسماء يكون  */}
      <TextField id="outlined-basic" label="user name" variant="outlined" />
      <TextField id="outlined-basic" label="age" variant="outlined" />
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
      <ButtonBase variant="contained" type='submit' >Register</ButtonBase>

    </Box>
   </Box>
   </>
  )
}

export default Register
