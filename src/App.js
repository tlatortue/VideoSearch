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
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}
        />
      </div>
    );
  }
}

export default App;
