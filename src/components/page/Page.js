import React from 'react'

import { StyledEngineProvider } from '@mui/material/styles';

import { Box, Typography } from '@mui/material'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

import { Theme } from '@mui/material'
import './page.css'
import {Gallery} from '../../components'
import ReactPlayer from 'react-player'


//margin='0 6em' padding={'0 7em'} 

let theme = createTheme({
    typography: {
      h4: {
        fontWeight:'bold',
        fontFamily:'Montserrat',
      },
      body1: {
        fontWeight: 500,
        fontFamily:'Montserrat',
      },
      body2: {
        fontWeight: 100,
        fontFamily:'Montserrat',
        color: (115, 125, 130),
      },
    },
  });
theme = responsiveFontSizes(theme);


const Page = () => {

  return (
    <StyledEngineProvider injectFirst>

    
    <ThemeProvider theme={theme}>
    <Box sx={{ marginTop:'100px'}} className='Page_Main' px={{xs:7, sm:7, md:40}}>


            <Typography variant="h4"  className='Page_Body-Text' gutterBottom >   
                Bruce Anakin Miranda, Jacob Manzano, Jan Carlo San Juan, Jaso Jacob Santiago <br/> <br/><br/> <br/>

                De La Salle University
             </Typography>

        <img src='https://res.cloudinary.com/dlx2alkrl/image/upload/v1655898193/iecap/logo_1_zvqjgg.png' alt='logo'/>

        <Box className='Page_Player'>
          <ReactPlayer controls url='https://youtu.be/691sJ57nHv8'/>
        </Box>

        <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Abstract
         </Typography>
         <Typography variant="body1"  className='Page_Body-Text' gutterBottom textAlign={'justify'}>
         Manual content generation of complex systems is tedious and time consuming which 
         makes many projects that rely on the production of complex systems infeasible to do 
         and maintain. Procedural content generation (PCG) solves this problem by providing a 
         limitless source of generated content, but will always be only good at generating the 
         complex systems it was designed to generate. Because technology is starting to become 
         more accessible and efficient, countries have the opportunity to utilize and adapt these
          new technologies for the betterment of society. For example, cities can use computer-vision 
          to create surveillance systems to monitor the flow of traffic, making research for city planning 
          much easier. With simulations of tasks such as computer-vision requiring a large amount of synthetic 
          data, this makes procedural city generation important. There exists software that deals with city generation,
           with Parish and Müller’s CityEngine being the most influential of the ones publicly 
           available, most software only handles generation of generic cities. There is a lack of 
           study on city generation that is specialized to create cities based on a specific country.
            This paper proposes a system that is capable of  procedurally generating cities that attempts to closely mimic the aesthetics and qualities of Philippine cities.
      </Typography>

      <Typography className="Page_Header-Text" variant="h4" gutterBottom component="div" sx={{justifyText:'left'}} >
        Gallery 
        </Typography>
        <Gallery/>

    </Box>
    </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Page