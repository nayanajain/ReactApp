import React from "react";
import NavigationBars from "./NavigationBars";
import Buttons from "./Buttons";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import FetchAPIExample from "./FetchAPIExample";
// import ReactHookUseRef from "./ReactHookUseRef";

const Home = () => {
    return (
        <>
        <NavigationBars /> 
       <Buttons />
       {/* <ReactHookUseRef />  */}
       <FeaturedPost />
       
       <Footer />

       <FetchAPIExample />
       
       
        </>
    );
}

export default Home;


