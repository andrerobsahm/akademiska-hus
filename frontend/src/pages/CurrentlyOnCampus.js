import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../Components/Header";
import Button from "../Components/Button";
import GradientBackground from "../Components/GradientBackground";
import BackgroundImage from '../images/medicinare.jpg'; // Path to BackgroundImage

class FindCampus extends Component {
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
          <Header />
          <GradientBackground
              backgroundImage={BackgroundImage}
              />
          <div className="main-content">
          <h1>Aktuellt</h1>
              {posts}
          </div>
      </div>
    );
  }
}

export default FindCampus;
