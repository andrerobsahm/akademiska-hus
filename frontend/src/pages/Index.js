import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../Components/Header";
import Button from "../Components/Button";
import GradientBackground from "../Components/GradientBackground";

class IndexPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <GradientBackground />
                <div className="main-content index">
                    <h1 className="index-header">Välkommen till Akademiska hus app!</h1>
                    <p>Kunskapsmiljöer för universitet och högskolor.</p>
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
