import React, {Component} from "react";
import Header from "../Components/Header";
import GradientBackground from "../Components/GradientBackground";
import Form from "../Components/Form";
import BackgroundImage from '../images/arkitekter.jpg'; // Path to BackgroundImage

class ErrorReport extends Component{
    render() {
        return (
            <div>
                <Header />
                <GradientBackground
                    height={'148vh'}
                    backgroundImage={BackgroundImage}
                    />
                <div className="main-content">
                    <h1>Felanmälan</h1>
                    <p>Din förvalda plats:</p>
                    <div>
                        <p>Beskriv felet</p>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorReport;
