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



    render() {
        return (
            <img style={styles.CardStyle} alt={this.props.name} src={this.props.image} id={this.props.id} onClick={() => this.props.imageClick(this.props.id)} />
        )
    }
}

export default Photo;