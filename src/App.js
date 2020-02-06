import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

class App extends Component {

    state = {
        images: this.loadImage
    };

    imageClick = event => {
        const images = this.loadImage();
        this.setState({ images })
    }

    loadImage() {
        while (images.length > 0) {
            let image = images.sort(() => 0.5 - Math.random())
            image = images.splice(image, 1);
            images.push(image[0]);  
            return this.setState({images})
        }
    }

    render() {
        return (
            <Wrapper>
                <Navbar></Navbar>
                <Header></Header>
                <Body>
                    {
                    images.map(image => (
                        <Photo
                            imageClick={this.imageClick}
                            images={this.state.images}
                            id={image.id}
                            key={image.id}
                            image={image.image}
                            name={image.name}
                        />
                    ))
                    }
                </Body>
            </Wrapper >
        )
    }
}

export default App;