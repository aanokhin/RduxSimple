import React from 'react';
import ReactDom from'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyC86beqsDuliFNmTEX-ahlXoMksVRXZcCc';
//Create component. It produces HTML

YTSearch({key: API_KEY, term: 'surfboard'}, function (data) {
  console.log(data)
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
}

//Take this component's gnerated HTML and put it
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
