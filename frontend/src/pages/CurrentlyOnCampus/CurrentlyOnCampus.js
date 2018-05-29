import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import GradientBackground from "../../Components/GradientBackground";
import BackgroundImage from '../../images/medicinare.jpg'; // Path to BackgroundImage
import "./CurrentlyOnCampus.css";

class CurrentlyOnCampus extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            cards: []
        };
    }
    componentDidMount() {
        let endpointURL = "http://localhost:8888/wp-json/wp/v2/";
        let postsURL = endpointURL + "campus";
        let currentlyURL = endpointURL + "currently";

        fetch(postsURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    posts: response
                });
            });

        fetch(currentlyURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    cards: response
                });
            });

    }
    render() {
      let posts = this.state.posts.map((post) => {
        if (post.id == 19) {
          return (
            <div className="currentlyon-campus-meta-container" key={post.id}>
              <h1>Aktuellt</h1>
              <div className="currentlyon-campus-meta">
                <p>På</p>
                <p>{post.title.rendered.slice(0, 6)}</p>
                <p>{post.title.rendered.slice(16, 27)}</p>
              </div>
              <div className=""></div>
            </div>
          );
        }
        });

        let cards = this.state.cards.map((card) => {
          return (
            <div className="currentlyon-campus-meta-container" key={card.id}>
              <div className="currentlyon-boxes-container"></div>
              <div className="running-tasks"></div>
              <Card text={card.acf.description} icon={card.acf.image.url} border="3px solid #EE7F00" link="/ErrorReport"/>
            </div>
          );
        });

    return (
        <div className="App">
            <Header />
            <GradientBackground
              backgroundImage={BackgroundImage} height="116.4vh"
            />
            <div className="main-content">
              <div className="currentlyon-campus-container">
                {posts}
                {cards}
                  <div className="currentlyon-boxes-container">
                  <div className="running-tasks">
                  //   <p>Pågående</p>
                  //   <Card text="Ommålade dörrar i salarna 408B, 408C, 409A, 409B" icon="../art-painting-roller.svg" border="3px solid #EE7F00" link="/ErrorReport" arrowimg="../right-arrow.svg"/>
                  //   <Card text="Anmälan: Fel på hiss 4B, reparation beräknas avslutas den 25 Maj." icon="../automobile-assistant.svg" border="3px solid #EE7F00" link="/ErrorReport" arrowimg="../right-arrow.svg"/>
                  // </div>
                  // <div className="finished-tasks">
                  //   <p>Avslutade idag</p>
                  //   <Card text="Ommålade dörrar i salarna 407B, 407C har torkat" icon="../art-painting-roller.svg" border="3px solid #00A388" link="/ErrorReport" arrowimg="../right-arrow.svg"/>
                  </div>
                  </div>
                  <div className="bottom-links">
                    <Button title="Felanmälan" icon="../tools.svg" link="/ErrorReport" arrowimg="../right-arrow.svg"/>
                    <Link to="/ChosenCampus">
                      <div className="go-back">
                        <img src="../left-arrow.svg" alt="Gå tillbaka"></img>
                      </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
      );
    }
}

export default CurrentlyOnCampus;
