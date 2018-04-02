import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyCD1-o8OwZAuElbHT1_A_N8MUYJLHKShF8';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        < SearchBar />
      </div>
    );
  }
}

export default App;
