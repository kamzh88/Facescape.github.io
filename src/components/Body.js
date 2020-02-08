import React from "react";

const styles = {
    cardStyle: {
        marginLeft: "auto",
        marginRight: "auto"
    },
}

function Body(props) {
    return (

        <div style={styles.cardStyle} className="col-sm-05 col-md-09 col-lg-9">
            {props.children}
        </div>

    )
}

export default Body;