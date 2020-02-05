import React from "react";

const styles = {
    CardStyle: {
        border: "5px solid #f1f1f1",
        height: "170px",
        width: "170px",
        margin: "8px 25px",
    }
}

function Photo(props) {
    // console.log(props);
    return (

        // <div className="img-container">
            <img style={styles.CardStyle} alt={props.name} src={props.image} key={props.id} />
        // </div>


    )
}

export default Photo;