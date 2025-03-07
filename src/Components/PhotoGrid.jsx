import imgone from "../../public/images/mentorship.jpg"
import imgtwo from "../../public/images/freelance-job.png"
import imgthree from "../../public/images/visit-arc.svg"
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AnimationRoundedIcon from '@mui/icons-material/AnimationRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import { Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
function PhotoGrid() {
    return ( 
        <>
        <Box sx={{width:"80%",marginLeft:"180px",paddingTop:"50px"}}>
        <Grid container>
    <Grid  item size={6} >
     <Box>
     <Typography sx={{marginTop:"2px"}} variant="h3" color="Black" >
        One-On-One Live <br/> Mentorship </Typography><br/>
        <Box sx={{display:"flex", gap:"10px",}}>
        <ApiRoundedIcon sx={{color:"teal"}}></ApiRoundedIcon>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Debug With the help of an expert</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"10px",marginTop:"7px"}}>
        <AnimationRoundedIcon sx={{color:"teal"}}></AnimationRoundedIcon>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Personalize Your learning Exprince</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"10px",marginTop:"7px"}}>
        <GradingRoundedIcon sx={{color:"teal"}}></GradingRoundedIcon>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Get Answers To complex Problems</Typography>
        </Box>
        <Button variant="contained" sx={{background:"#ff6b54",marginTop:"20px",padding:"10px"}}>Find A mentor</Button>
      </Box>
    </Grid>
    <Grid item size={6}>
   <Box> <img src={imgtwo} alt="" /></Box>
    </Grid>
    <Grid item size={6}>
    <Box> <img src={imgtwo} alt="" /></Box>
     </Grid>
     <Grid item size={6}>
     <Box >
     <Typography sx={{marginTop:"2px"}} variant="h3" color="Black" >
       Project Based Freelance <br/> Work </Typography><br/>
        <Box sx={{display:"flex", gap:"10px"}}>
        <ApiRoundedIcon sx={{color:"teal"}}></ApiRoundedIcon>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Debug With the help of an expert</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"10px",marginTop:"7px"}}>
        <AnimationRoundedIcon sx={{color:"teal"}}></AnimationRoundedIcon>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Personalize Your learning Exprince</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"10px",marginTop:"7px"}}>
        <GradingRoundedIcon sx={{color:"teal"}}></GradingRoundedIcon>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Get Answers To complex Problems</Typography>
        </Box>
        <Button variant="contained" sx={{background:"#ff6b54",marginTop:"20px",padding:"10px"}}>Find A mentor</Button>
      </Box>    
     </Grid>
  <Grid item size={6}>
 <Box> <img src={imgthree} alt="" /> </Box>
  </Grid>
  <Grid item size={6}>
  <Box>
     <Typography sx={{marginTop:"2px"}} variant="h5" color="Black" >
       Arc ( ) </Typography>
       <Typography sx={{marginTop:"2px"}} variant="h4" color="Black" >
       Hiring For a Bigger Project </Typography><br/>
        <Box sx={{display:"flex", gap:"10px"}}>
        <Typography sx={{marginTop:"2px"}} variant="subtitle" color="grey" >Arc helps you find senior devolpers for both permanent<br/>
        Full-time roles and 40+ Hours contract projects
        </Typography>
        </Box>
        
        <Box sx={{display:"flex", gap:"5px"}}>
            <Typography sx={{marginTop:"2px"}} variant="h6" color="blue">Visit Arc To learn More  </Typography>
            <ArrowForwardRoundedIcon sx={{marginTop:"7px",color:"blue"} } > </ArrowForwardRoundedIcon> 
        </Box>
    
      </Box>
 
  </Grid>
    </Grid>
    </Box>
      
        </>
     );
}

export default PhotoGrid ;