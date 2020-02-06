import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

class App extends Component {

    state = {
        images
    }

    // imageClick = id => {
    //     console.log(id);

    // }

    render() {
        const imagesArray = [];
        function createArrayOfNumbers() {
            while (images.length > 0) {
                let image = Math.floor(Math.random() * images.length);
                image = images.splice(image, 1);
                imagesArray.push(image[0]);
            }
            console.log(imagesArray);
        }
        
        createArrayOfNumbers();
        return (
            <Wrapper>
                <Navbar></Navbar>
                <Header></Header>
                <Body>
                    {imagesArray.map(image => (
                        <Photo
                            imageClick={this.imageClick}
                            id={image.id}
                            key={image.id}
                            image={image.image}
                            name={image.name}
                        />
                    ))}
                </Body>
            </Wrapper >
        )
    }
}

export default App;