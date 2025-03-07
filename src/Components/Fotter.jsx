import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Fotter = () => {
  return (
    <>
    <Box sx={{backgroundColor:"black",width:"100%"}} >
        <Box sx={{backgroundColor:"black",display:"flex",gap:"150px",width:"80%",height:"300px",margin:"auto",borderBottom:"2px solid grey",paddingTop:"10px"}}>
            <Box>
            <ul style={{listStyle:"none"}}>
                <li>
        <Typography variant="h5" color='white' gutterBottom>
         Products
         </Typography>
                  </li>
                <li>
                <Typography variant="h6" color='grey' gutterBottom>
         CodeMentor
         </Typography>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find A mentor to help you in real time.
         </Typography>
                </li>
                <li>
                <Typography variant="h6" color='grey' gutterBottom>
         CodeMentor
         </Typography>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find A mentor to help you in real time.
         </Typography>
                </li>
                <li>
                <Typography variant="h6" color='grey' gutterBottom>
         CodeMentor
         </Typography>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find A mentor to help you in real time.
         </Typography>
                </li>
            </ul>
            </Box>
            <Box sx={{display:"flex"}}>
            <ul style={{listStyle:"none"}}>
                <li>
        <Typography variant="h5" color='white' gutterBottom>
         Pages
         </Typography>
                  </li>
                <li>
              
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Become A contributer
         </Typography>
                </li>
                <li>
              
              <Typography variant="subtitle1" color='grey' gutterBottom>
            How it works
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find Members
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find FreeLancers
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find A tutor
         </Typography>
                </li>
            </ul>
            <ul style={{listStyle:"none"}}>
                <li>
        <Typography variant="h5" color='Black' gutterBottom>
         Pages
         </Typography>
                  </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Become A contributer
         </Typography>
                </li>
                <li>
              
              <Typography variant="subtitle1" color='grey' gutterBottom>
            How it works
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find Members
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find FreeLancers
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find A tutor
         </Typography>
                </li>
            </ul>
            <ul style={{listStyle:"none"}}>
                <li>
        <Typography variant="h5" color='Black' gutterBottom>
         Pages
         </Typography>
                  </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Become A contributer
         </Typography>
                </li>
                <li>
              
              <Typography variant="subtitle1" color='grey' gutterBottom>
            How it works
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find Members
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find FreeLancers
         </Typography>
                </li>
                <li>
              <Typography variant="subtitle1" color='grey' gutterBottom>
            Find A tutor
         </Typography>
                </li>
            </ul>
            </Box>
        </Box>
        <Box sx={{backgroundColor:"black",display:"flex",gap:"150px",width:"80%",height:"50px",margin:"auto",paddingTop:"10px"}}>
            <Box>
      <Typography color='white' variant='subtitle1'> &copy; CopyRight 2024 Reserved For Abdelrahman Tamim</Typography> 
      </Box>
      <Box sx={{display:"flex",gap:"20px"}}>
      <Typography color='white' variant='subtitle1'> Cockie Policy</Typography> 
      <Typography color='white' variant='subtitle1'> Privacy Policy</Typography> 
      <Typography color='white' variant='subtitle1'> Terms Of Servies</Typography> 
      <Typography color='white' variant='subtitle1'> Carrers</Typography> 
        <FacebookIcon sx={{ color: "white", fontSize: 30 }} ></FacebookIcon>
        <TwitterIcon sx={{ color: "white", fontSize: 30 }} ></TwitterIcon>
        <LinkedInIcon sx={{ color: "white", fontSize: 30 }} ></LinkedInIcon>
      </Box>

           </Box>
       
        
       
    </Box>
    </>
  )
}

export default Fotter
