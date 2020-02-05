import React, { Component } from "react";

const styles = {
    CardStyle: {
        border: "5px solid #f1f1f1",
        height: "170px",
        width: "170px",
        margin: "8px 25px",
    }
}

class Photo extends Component {


    imageClick = event => {
        event.preventDefault();
        let ID = event.target.id;
        console.log(ID);
    }


    render() {

        return (
            <img style={styles.CardStyle} alt={this.props.name} src={this.props.image} id={this.props.id} onClick={this.imageClick} />
        )
    }
}

export default Photo;