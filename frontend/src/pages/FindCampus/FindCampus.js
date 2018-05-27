import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                  <img src={post.acf.bild} alt="Bild på campus"></img>
                  <div className="campus-name-arrow">
                  <strong>{post.title.rendered}</strong>
                  <div className="arrow">
                    <Link to="ChosenCampus" params={{ id: post.id }}>
                      <img src="../right-arrow.svg" alt="Visa campus"></img>
                    </Link>
                  </div>
                  </div>
                </div>
            );
        });
        return (
            <div className="App">
              <Header />
              <GradientBackground height={'129vh'}/>
              <div className="main-content">
              <h1>Välj Campus</h1>
              <div className="campuses-nearby">
                <p>Följande campus finns i närheten av dig:</p>
              </div>
              {posts}
              <Link to="/">
                <div className="go-back">
                  <img src="../left-arrow.svg" alt="Gå tillbaka"></img>
                </div>
              </Link>
              </div>
            </div>
        );
    }
}

export default FindCampus;
