import React from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import CardComponent from "./CardComponent";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const FeaturedPost = () => {

  return (
    <>
      <Typography variant="h5" sx={{ color: 'blue' }} component="div">
        Millions of Success Stories
      </Typography>
      <Grid container spacing={2}>

        <Grid item xs={12} md={4}>
          <Item>
            <Card sx={{ maxWidth: { xs: 345, md: 500 } }}>
            <CardComponent images="/static/images/profgirl.png" alt="girlimg" name="Sample1s"/>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Card sx={{ maxWidth: { xs: 345, md: 500 } }}>
            <CardComponent images="/static/images/profboy.jpg" alt="boyimg" name="Sample2"/>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Card sx={{ maxWidth: { xs: 345, md: 500 } }}>
            <CardComponent images="/static/images/profboy.jpg" alt="img" name="Sample3"/>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default FeaturedPost;


