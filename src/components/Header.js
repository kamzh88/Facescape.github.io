import React from "react";

const styles = {
    headerStyle: {
        background: "#2c323c",
        textAlign: "center",
    },
    headerText: {
        color: "#fff"
    }
}

function Header(props) {
    return (
        <div style={styles.headerStyle} className="jumbotron">
            <h1 style={styles.headerText} >Clicky Name!</h1>
            <h2 style={styles.headerText} >Click on an image to earn points, but don't click on any more than once!</h2>
        </div>

    )
}

export default Header;