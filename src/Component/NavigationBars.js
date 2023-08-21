import React from "react";
import { Divider, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

const NavigationBars = () => {
    return (
        <>
        <Toolbar>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <Typography sx={{color: {xs: 'red', md: 'blue'}}} variant="h6">Blogging Website</Typography>
        </Toolbar>
        <Divider />
        <Toolbar><Typography variant="h5">Explore the World of React</Typography></Toolbar>
        </>
    );
}

export default NavigationBars;


