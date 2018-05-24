import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../../Components/Header";
import Button from "../../Components/Button";
import GradientBackground from "../../Components/GradientBackground";

import "./FindCampus.css";

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
        let posts = this.state.posts.map((post, id) => {
            return (
                <div className="campus-container" key={post.id}>
                  <img src={post.acf.bild}></img>
                  <strong>{post.title.rendered}</strong>
                </div>
            );
        });
        return (
            <div className="App">
              <Header />
              <GradientBackground />
              <div className="main-content">
              <h1>Välj campus</h1>
              <p>Följande campus finns i närheten av dig:</p>
              {posts}
              </div>
            </div>
        );
    }
}

export default FindCampus;
