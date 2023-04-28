import { Box, Typography } from "@mui/material";
import React from "react";
import "./about.css";




const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application by mern stack
          
        </Typography>
        
        
        
      </Box>
      <div  className="you">      
        <img src=".\guddu imag.jpeg" alt="error" />
      </div>

    </div>
  );
};
export default About;
