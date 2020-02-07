import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

// 1. Work on the logic for when we click on the ids.
// 2. Work on the score count and the top score.
// 3. Add a bit more styling on the page.

class App extends Component {

    state = {
        images,
        score: 0,
        topScore: 0
    };

    imageClick = id => {
        const newState = { ...this.state};
        let score = newState.score;
        let topScore = newState.topScore;
        topScore += 1;
        score += 1;
        this.setState({ score: score, topScore: topScore });
        this.loadImage();
    }

    loadImage() {
        images.sort(() => 0.5 - Math.random());
        return this.setState({ images });
    }

    render() {
        
        images.sort(() => 0.5 - Math.random());

        return (
            <Wrapper>
                <Navbar score={this.state.score} topScore={this.state.topScore}>
                </Navbar>
                <Header></Header>
                <Body>
                    {this.state.images.map(image => (
                        <Photo
                            imageClick={this.imageClick}
                            images={this.state.images}
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