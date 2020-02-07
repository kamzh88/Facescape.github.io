import React from "react";

const styles = {
    cardStyle: {
        marginLeft: "auto",
        marginRight: "auto"
    },
}

function Body(props) {
    return (

        <div style={styles.cardStyle} className="col-8">
            {props.children}
        </div>

    )
}

export default Body;