import React, { Component } from "react";
import Header from "../../Components/Header";
import GradientBackground from "../../Components/GradientBackground";
import BackgroundImage from '../../images/arkitekter.jpg'; // Path to BackgroundImage
import "./BuildingInfo.css";

class BuildingInfo extends Component {
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
        if (post.id === 19) {
          return (
            <div className="chosen-campus-meta-container" key={post.id}>
              <h1>Byggnadsinfo</h1>
              <div className="chosen-campus-meta">
                <p>Byggnad {post.acf.byggnad}</p>
              </div>
              <div className="image-container">
                <img src={post.acf.bild} alt="Bild på campus"></img>
                <p>Chalmers - Campus Johanneberg</p>
              </div>
              <div className="description-container">
                <p>Fem minuters gångväg från Götaplatsen ligger Campus
                Johanneberg. Här finns ungefär 8 500 Chalmersstudenter
                och merparten av all forskning. Även Göteborgs universitet
                bedriver här forskning och utbildning inom både
                naturvetenskap och humaniora.</p>
              </div>
              <div className="option-container">
              <div>
                <p>{post.acf.tillganglighet}</p>
              </div>
              <div>
                <p>{post.acf.vaningar}</p>
              </div>
              <div>
                <p>{post.acf.byggar}</p>
              </div>
              <div>
                <p>{post.acf.miljoklass}</p>
              </div>
              <div>
                <p>{post.acf.hyrparkering}</p>
              </div>
              <div>
                <p>{post.acf.cykelparkering}</p>
              </div>
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
              </div>
          </div>
      </div>
    );
  }
}

export default BuildingInfo;
