import React from "react";

function Button(props){

    const name = props.name;
    const onClick = props.onClick;

    return(
        <button className='button' onClick={onClick}>{name}</button>
    )
}

export default Button;