import React, {useEffect, useRef, useState} from "react";

const ReactHookUseRef = () => {

    const counter = useRef("Nayana");
    const updateBtn = () => {
        console.log(counter.current.innerText)
    }
    
   
    

    
    
    return (
        <>
     <div ref={counter}>Nayana Jain</div>
     <button onClick={()=>updateBtn()}>Submit</button>
     </>
     
    );
}

export default ReactHookUseRef;
