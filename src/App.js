import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

class App extends Component {

    state = {
        images,
        score: 0,
        topScore: 0,
        clickID: []
    };

    componentDidMount() {
        this.loadImage();
    }

    imageClick = id => {
        const newState = { ...this.state };
        let score = newState.score;
        let topScore = newState.topScore;
        let clickID = this.state.clickID;
        if (clickID.length === 0) {
            score++
            clickID.push(id);
            this.setState({ score: score, clickID: this.state.clickID });
        } else {
            if (clickID.includes(id)) {
                alert("You Lose");
                this.setState({ score: 0, clickID: [] })
            } else if (!clickID.includes(id)) {
                score++
                clickID.push(id);
                this.setState({ score: score, clickID: this.state.clickID });
                if (score === 12) {
                    alert("You Win!");
                    this.setState({ score: 0, chickID: [] });
                }
            }
        }
        if (score > topScore) {
            this.setState({ topScore: score })
        }
        this.loadImage();
    }

    loadImage() {
        images.sort(() => 0.5 - Math.random());
        return this.setState({ images });
    }

    render() {
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