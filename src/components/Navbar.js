import React from "react";

const styles = {
    navBarStyle: {
        background: "#5133a4"
    },
    navBar: {
        color: "#fff"
    }
}

function Navbar(props) {
    return (
        <nav style={styles.navBarStyle} className="navbar">
            <div style={styles.navBar} className="navbar-brand">Click Game</div>
            <div style={styles.navBar} className="navbar-brand">Click an image to begin!</div>
            <div style={styles.navBar} className="navbar-brand">Score: 0 | Top Score: 0</div>
        </nav>
    )
}

export default Navbar;