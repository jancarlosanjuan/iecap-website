import React from 'react'
import './header.css'
import { Box, Typography } from '@mui/material'
import { width } from '@mui/system'
import { StyledEngineProvider } from '@mui/material/styles';

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
let theme = createTheme({
    
  });
theme = responsiveFontSizes(theme);


const Header = () => {
  return (
    <StyledEngineProvider injectFirst>
     <ThemeProvider theme={theme}>
      
   
        <Box className="Header_Main" alignItems='center'>

        <Box className='Header_Nested' alignItems='center' px={{xs:1, sm:2, md:3}}> 



        <Typography className='Header_Text' variant="h2" gutterBottom component="div" sx={{ alignItems:"center center", color:'rgb(112,250,149)'}} margin='0 2em' align='center' >
                    Procedural Philippine City Generation using Real World Road Network Data
        </Typography>

        <Typography className='Header_SubText' variant="subtitle3" gutterBottom component="div" sx={{ alignItems:"center center", color:'white'}} margin='0 2em' align='center'>
                    A tool to synthetically generate a Manila-based city. Made using Unreal Engine 4.
        </Typography>


        </Box>
                
    </Box>
    </ThemeProvider>   
    </StyledEngineProvider>
  )
}

export default Header