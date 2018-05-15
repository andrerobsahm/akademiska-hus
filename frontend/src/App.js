import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        let endpointURL = "http://localhost:8888/wp-json/wp/v2/"
        let postsURL = endpointURL + "posts"

        fetch(postsURL)
        .then(response => response.json())
        .then(response => {
            this.setState({
                posts: response
            })
        })
    }
  render() {
      let posts = this.state.posts.map((post, index) => {
          return (
          <div key={index}>
              <strong>{post.title.rendered}</strong>
              <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
          </div>
      )
  })
    return (
      <div className="App">
        <h3>Nyheter om ditt campus:</h3>
        {posts}
      </div>
    );
  }
}

export default App;
