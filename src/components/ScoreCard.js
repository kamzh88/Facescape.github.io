import React from "react";

function ScoreCard(props) {
    
    return(
       
        <div>Score: {props.score} | Top Score: {props.topScore} </div>
    )
}

export default ScoreCard;