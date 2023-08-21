import React from "react";
import { Button, Typography } from "@mui/material";


const Buttons = () => {
    return (
        <>
        <div style={{ height: 700, backgroundImage: "url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80)", backgroundSize : 'cover', backgroundRepeat: 'no-repeat' }}>
            <Typography variant="h3" sx={{textAlign: 'center',alignItems: 'center', paddingTop: 30, color: 'blue'}}>Publish your passions, your way</Typography>
            <Typography variant="h5" sx={{ color: 'brown', textAlign: 'center'}}>Create a unique and beautiful blog easily.</Typography>
            <Button variant="contained" sx={{background: 'orange', textAlign: 'center', marginLeft: '50%' }} >Create now</Button>
       <br/>
       </div>
        <Button variant="contained" color= 'success' text="Github" style={{margin: 20, height: 100, width: 200, textAlign: "center"}}>Register</Button>
        <Button variant="contained" color= 'primary' text="Project" style={{ margin: 20, height: 100, width: 200, textAlign: "center"}}>Login</Button>
         
        </>
    );
}

export default Buttons;


