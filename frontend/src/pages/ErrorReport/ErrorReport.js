import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Header";
import GradientBackground from "../../Components/GradientBackground";
import MapComponent from '../../Components/Map/MapComponent';
import Form from "../../Components/Form";
import BackgroundImage from '../../images/arkitekter.jpg';

class ErrorReport extends Component{
    render() {
        return (
            <div>
                <Header />
                <GradientBackground
                    backgroundImage={BackgroundImage}
                    height={`1380px`}
                    />
                <div className="main-content">
                    <h1>Felanmälan</h1>
                    <h2>Din förvalda plats:</h2>
                        <MapComponent
                            containerElement=
                            {
                                <div style={{ height: `350px`}} />
                            }
                            mapElement=
                            {
                                <div className="mapComponent" style={{ height: `100%` }} />
                            }
                            />
                        <p>Chalmers - Campus Johanneberg, byggnad JSP2</p>
                            <Link to="/FindCampus">Ändra</Link>
                        <div>
                            <h2>Beskriv felet</h2>
                            <Form />
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

export default ErrorReport;
