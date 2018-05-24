import React, {Component} from "react";
import Header from "../Components/Header";
import GradientBackground from "../Components/GradientBackground";
import Form from "../Components/Form";


class ErrorReport extends Component{
    render() {
        return (
            <div>
                <Header />
                <div className="main-content">
                    <GradientBackground />
                    <h1>Felanmälan</h1>
                    <p>Din förvalda plats:</p>
                </div>
                <div>
                    <p>Beskriv felet</p>
                    <Form />
                </div>
            </div>
        );
    }
}

export default ErrorReport;
