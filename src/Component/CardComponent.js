import React from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from "@mui/material";

const CardComponent = (props) => {
    console.log(props);
    return (
        <>
  
        <CardContent>
                <CardMedia
                  component="img"
                  height="300"
                  width="300"
                 style={{borderRadius: "50%", float: "right", border: "1px solid grey"}}
                  image={props.images}
                  alt={props.alt}
                />
                <Typography variant="h6">
                  {props.name}
                </Typography>
                <Typography variant="body2">

                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.

                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More..</Button>
              </CardActions>
       
        </>
    );
}

export default CardComponent;


