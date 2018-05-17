import React, { Component } from "react";
import "./App.css";

import Header from "./Components/Header";
import Button from "./Components/Button";
import GradientBackground from "./Components/GradientBackground";

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        let endpointURL = "http://localhost:8888/wp-json/wp/v2/";
        let postsURL = endpointURL + "posts";

        fetch(postsURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    posts: response
                });
            });
    }
    render() {
        let posts = this.state.posts.map((post, index) => {
            return (
                <div key={index}>
                    <strong>{post.title.rendered}</strong>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered
                        }}
                    />
                </div>
            );
        });
        return (
            <div className="App">
                <GradientBackground />
                <Header />
                <h3>Nyheter om ditt campus:</h3>
                {posts}
                <Button title={"Logga in"} />
                <Button title={"Gäst"} />
            </div>
        );
    }
}

export default App;
