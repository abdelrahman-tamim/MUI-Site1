import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';

function SiteReviews () {
    return ( <>
    
      <Box sx={{backgroundColor:"#005672", marginTop:"50px"}}>
      <Box sx={{display:"flex",justifyContent:"center"}}>
    <Typography sx={{marginTop:"30px"}} variant="h3" color="white" >
    Connect With
    </Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center"}}>
    <Typography sx={{marginTop:"2px"}} variant="h3" color="white" >
   12,000+ Top Devolpers AnyWhere
    </Typography>

    </Box>
      <Grid   container spacing={1} sx={{paddingTop:"10px",marginRight:"50px",marginLeft:"120px"}}>
        <Grid sx={{display:"flex", padding:"20px"}} item size={4} >
        <Card  >
        <CardContent sx={{ height: '100%' ,display:"flex",gap:"10px"}}>
        <Avatar sx={{ width: 71, height: 71 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
        <Box>
           <Typography variant="h5" component="div">
                Ahmed Ali
              </Typography>
              <Typography variant="body2" color="text.secondary">
             Full-Stack Software Devolper
              </Typography>
              <Box display="flex" gap="5px">
                <HtmlIcon color='grey'/>
                <CssIcon/>
                <JavascriptIcon/>
              </Box>
              </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid sx={{display:"flex", padding:"20px"}} item  size={4} >
        <Card  >
        <CardContent sx={{ height: '100%' ,display:"flex",gap:"10px"}}>
        <Avatar sx={{ width: 71, height: 71 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Box>
           <Typography variant="h5" component="div">
                Ibrahim  Ali
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Full-Stack Software Devolper
              </Typography>
              <Box display="flex" gap="5px">
                <HtmlIcon color='grey'/>
                <CssIcon/>
                <JavascriptIcon/>
              </Box>
              </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid sx={{display:"flex", padding:"20px"}} item  size={4} >
        <Card  >
        <CardContent sx={{ height: '100%' ,display:"flex",gap:"10px"}}>
        <Avatar sx={{ width: 71, height: 71 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
        <Box>
           <Typography variant="h5" component="div">
                Israa Alaa
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Full-Stack Software Devolper
              </Typography>
              <Box display="flex" gap="5px">
                <HtmlIcon color='grey'/>
                <CssIcon/>
                <JavascriptIcon/>
              </Box>
              </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid sx={{display:"flex", padding:"20px"}} item  size={4} >
        <Card  >
        <CardContent sx={{ height: '100%' ,display:"flex",gap:"10px"}}>
        <Avatar sx={{ width: 71, height: 71 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Box>
           <Typography variant="h5" component="div">
                Ahmed Ali
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Full-Stack Software Devolper
              </Typography>
              <Box display="flex" gap="5px">
                <HtmlIcon color='grey'/>
                <CssIcon/>
                <JavascriptIcon/>
              </Box>
              </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid sx={{display:"flex", padding:"20px"}} item  size={4} >
        <Card  >
        <CardContent sx={{ height: '100%' ,display:"flex",gap:"10px"}}>
        <Avatar sx={{ width: 71, height: 71 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
        <Box>
           <Typography variant="h5" component="div">
                Fatma Sameh
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Full-Stack Software Devolper
              </Typography>
              <Box display="flex" gap="5px">
                <HtmlIcon color='grey'/>
                <CssIcon/>
                <JavascriptIcon/>
              </Box>
              </Box>
            </CardContent>
            </Card>
        </Grid>
        <Grid sx={{display:"flex", padding:"20px"}} item  size={4} >
        <Card  >
        <CardContent sx={{ height: '100%' ,display:"flex",gap:"10px"}}>
        <Avatar sx={{ width: 71, height: 71 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
        <Box>
           <Typography variant="h5" component="div">
                Ali Saleh
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full-Stack Software Devolper
              </Typography>
              <Box display="flex" gap="5px">
                <HtmlIcon color='grey'/>
                <CssIcon/>
                <JavascriptIcon/>
              </Box>
              </Box>
            </CardContent>
            </Card>
        </Grid>
      </Grid>

      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"40px",paddingBottom:"50px"}} >
        <Typography color='white' variant='h5'>Start Working With Our Developers</Typography>
        <Button variant="contained" sx={{background:"#ff6b54",marginTop:"20px",width:"130px"}}>Get Started</Button>

      </Box>

        
      </Box>
    
    </> );
}

export default SiteReviews ;