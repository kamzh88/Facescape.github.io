import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Body from "./components/Body";
import Photo from "./components/Photo";
import images from "./image.json";

// 2. Work on the score count and the top score.
// 3. Add a bit more styling on the page.
// 4. Have the picture shake if we already click on that ID.

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
        console.log(images);
        if (clickID.length === 0) {
            score++
            clickID.push(id);
            this.setState({ score: score, topScore: topScore, clickID: this.state.clickID });
            this.loadImage();
        } else {
            if (clickID.includes(id)) {
                alert("You Lose");
                this.setState({score: 0, topScore: topScore, clickID: []})
                this.loadImage();
            } else if (!clickID.includes(id)) {
                score++
                clickID.push(id);
                this.setState({ score: score, topScore: topScore, clickID: this.state.clickID });
                this.loadImage();
            }
        }
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