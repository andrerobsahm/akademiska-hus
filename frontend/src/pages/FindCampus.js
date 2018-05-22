import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../Components/Header";
import Button from "../Components/Button";
import GradientBackground from "../Components/GradientBackground";

class FindCampus extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        let endpointURL = "http://localhost:8888/wp-json/wp/v2/";
        let postsURL = endpointURL + "campus";

        fetch(postsURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    posts: response
                });
            });
    }
    render() {
        let posts = this.state.posts.map((post) => {
            return (
                <div>
                    <strong>{post.title.rendered}</strong>
                <p
                    dangerouslySetInnerHTML={{
                        __html: post.content.rendered.Byggnad
                    }}
                />
                </div>
            );
        });
        return (
            <div className="App">
                <Header />
                <div className="main-content">
                </div>
                {posts}
                <Button title={"Logga in"} />
                <Button title={"Gäst"} />
            </div>
        );
    }
}

export default FindCampus;
