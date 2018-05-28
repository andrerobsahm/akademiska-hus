import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import Header from "../../Components/Header";
import Button from "../../Components/Button";
import GradientBackground from "../../Components/GradientBackground";
import BackgroundImage from '../../images/arkitekter.jpg'; // Path to BackgroundImage
import "./ChosenCampus.css";

class ChosenCampus extends Component {
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
        if (post.id == 19) {
          return (
            <div className="chosen-campus-meta-container" key={post.id}>
              <h1>{post.title.rendered.slice(7, 15)}</h1>
              <div className="chosen-campus-meta">
                <p>{post.title.rendered.slice(0, 6)}</p>
                <p>{post.title.rendered.slice(16, 27)}</p>
              </div>
            </div>
          );
        }
        });

  return (
      <div className="App">
          <Header />
          <GradientBackground
            backgroundImage={BackgroundImage}
          />
          <div className="main-content">
            <div className="chosen-campus-container">
              {posts}
                <div className="option-container">
                  <div>
                    <Button title="Felanmälan" icon="../tools.svg" link="/ErrorReport" arrowimg="../right-arrow.svg"/>
                  </div>
                  <div>
                    <Button title="Aktuellt" icon="../automobile-assistant.svg" link="/CurrentlyOnCampus" arrowimg="../right-arrow.svg"/>
                  </div>
                  <div>
                    <Button title="Byggnadsinfo" icon="../buildings.svg" link="/BuildingInfo" arrowimg="../right-arrow.svg"/>
                  </div>
                  <div>
                    <Button title="Kontaktinfo" icon="../information.svg" link="/ContactInfo" arrowimg="../right-arrow.svg"/>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default ChosenCampus;
