import React from "react";
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
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
              <CardContent>


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
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Card sx={{ maxWidth: { xs: 345, md: 500 } }}>
              <CardContent>


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
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Card sx={{ maxWidth: { xs: 345, md: 500 } }}>
              <CardContent>
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
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default FeaturedPost;


