import React, { Component } from "react";

import Header from "../../Components/Header";
import Button from "../../Components/Button";
import GradientBackground from "../../Components/GradientBackground";
import BackgroundImage from '../../images/aula-medica.jpg'; // Path to BackgroundImage
import './Index.css';

class IndexPage extends Component {
    render() {
        return (
            <div>
                <Header />

                <GradientBackground
                    backgroundImage={BackgroundImage} />

                <div className="main-content index">
                    <h1 className="index-header">Välkommen till Akademiska hus app!</h1>
                    <h2 className="index-sub-header">Kunskapsmiljöer för universitet och högskolor.</h2>
                    <Button title={"Logga in"} />
                    <Button title={"Gästinloggning"} />

                    <div className="index-link-box">
                        <p><a className="index-link">Glömt Lösenord</a></p>
                        <p><a className="index-link">Skapa konto</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;