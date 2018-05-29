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
            cards: [],
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
          if (card.acf.finished == true) {
          return (
            <div className="currentlyon-boxes-container" key={card.id}>
            <p>Avslutade idag</p>
                  <Card text={card.acf.description} icon={card.acf.image.url} finished={card.acf.finished}/>
                </div>
          );
        }
        if (!card.acf.finished) {
        return (
          <div className="currentlyon-boxes-container" key={card.id}>
              <p>Pågående</p>
              <Card text={card.acf.description} icon={card.acf.image.url} finished={card.acf.finished}/>
            </div>
        );
        }
        });

    return (
        <div className="App">
            <Header />
            <GradientBackground
              backgroundImage={BackgroundImage} height="117.4vh"
            />
            <div className="main-content">
              <div className="currentlyon-campus-container">
                {posts}
                <div className="card-container">
                  {cards}
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
      );
    }
}

export default CurrentlyOnCampus;
