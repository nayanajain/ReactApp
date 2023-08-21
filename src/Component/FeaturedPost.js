import React from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";


const FeaturedPost = () => {
    
    return (
        <>
          <Card sx={{maxWidth: {xs:345, md: 500 }}}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          Millions of Success Stories
        </Typography>
        <CardMedia 
        component="img"
        height="500"
        image="/static/images/profgirl.png"
        alt="logo"
      />
       <Typography variant="h6">
        ABC QWER
       </Typography>
        <Typography variant="body2">
          
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More..</Button>
      </CardActions>
    </Card>

    
        
        </>
    );
}

export default FeaturedPost;


