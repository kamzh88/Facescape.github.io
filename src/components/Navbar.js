import React from "react";
import ScoreCard from "./ScoreCard";

const styles = {
    navBarStyle: {
        background: "#5133a4",
        position: "fixed",
        width: "100%"
    },
    navBar: {
        color: "#fff",
        fontSize: "1.6rem"
    },
    navName: {
        color: "#fff",
        fontSize: "1.6rem"
    },
    score: {
        color: "#fff",
        fontSize: ".9rem"
    }
}

function Navbar(props) {

    return (
        <nav style={styles.navBarStyle} className="navbar">
            <div style={styles.navBar} className="navbar-brand">Clicky Game</div>
            <div style={styles.navName} className="navbar-brand">Click an image to begin!</div>
            <div style={styles.score} className="navbar-brand">
                <ScoreCard score={props.score} topScore={props.topScore}>
                
                </ScoreCard>
            </div>
        </nav>
    )
}

export default Navbar;