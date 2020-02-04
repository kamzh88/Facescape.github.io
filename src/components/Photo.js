import React from "react";



function Photo(props) {

    return (
        <img alt={props.name} src={props.image} />

    )
}

export default Photo;