// Namespace imports
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

// Created component imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// UI Design imports
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

    this.videoSearch('cryptocurrency');
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
        <SearchBar />
        <VideoList
          videos = {this.state.videos}
        />
      </div>
    );
  }
}

export default App;
