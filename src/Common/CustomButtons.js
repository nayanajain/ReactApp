import React from "react";

const CustomButtons = (props) => {
    return (
        <>
        <button type={props.type} style={{height: 80, width: 80, background: props.background}}>{props.type}</button>
        </>
    );
}

export default CustomButtons;