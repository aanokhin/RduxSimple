import _ from  'lodash';
import React, {Component} from 'react';
import ReactDom from'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyC86beqsDuliFNmTEX-ahlXoMksVRXZcCc';
//Create component. It produces HTML


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    console.log(term);
    YTSearch({key: API_KEY, term: term},  (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });

  }

  render () {
    const videoSearchDb = _.debounce((term) => {this.videoSearch(term)}, 3000)
    return (
      <div>
        <SearchBar onSearchTermChange= {videoSearchDb}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's gnerated HTML and put it
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
