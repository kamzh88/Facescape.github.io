import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

function App() {

    return (
        <Wrapper>
            <Navbar></Navbar>
            <Header></Header>
            <Body>
                {images.map(image => (
                    <Photo
                        image={image.image}
                        name={image.name}
                    />
                ))}


            </Body>
        </Wrapper>

    )
}

export default App;