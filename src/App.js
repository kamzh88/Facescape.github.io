import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

function App() {
    console.log(images);
    return (
        <Wrapper>
            <Navbar></Navbar>
            <Header></Header>
            <Body>
                <Photo images={images}></Photo>
            </Body>
        </Wrapper>

    )
}

export default App;