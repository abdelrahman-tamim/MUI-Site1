import styles from "./styles/Main.module.css"
import first from "../../public/images/hero-l.png"
import { Button,Box, Typography} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function Main () {
    return (
     <>
    <div className={styles.maindiv}>
    <img className={styles.firstimg} src={first} alt="first" />
   <Box sx={{display:"flex",justifyContent:"center"}}>
    <Typography sx={{marginTop:"30px"}} variant="h3" color="white" >
   Find A devolper For 
    </Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center"}}>
    <Typography sx={{marginTop:"2px"}} variant="h3" color="white" >
    Live Mentornship & Freelance Projects
    </Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center"}}>
    <Button variant="contained" sx={{background:"#ff6b54",marginTop:"20px"}}>Get Help Now</Button>
    </Box>

    </div>
    
    <Box sx={{display:"flex",justifyContent:"center"}}>
    <Typography sx={{marginTop:"200px"}} variant="h3" color="Black" >
    Get help from vetted software devolpers
    </Typography>
    </Box>

    </> 
    );
}

export default Main ;


