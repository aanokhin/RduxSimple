import React from 'react';
import { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import { fetchWeather} from '../actions/index'


export default class App extends Component {
  constructor(props){
    super(props);

    this.handleFetch = this.handleFetch.bind(this);
  };

  handleFetch(evt, city) {
    const {dispatch} = this.props;
    dispatch(fetchWeather(city))
  };

  render() {
    const {weather} = this.props
    return (
      <div>
        <SearchBar handleFetch={this.handleFetch}/>
        <WeatherList weather={weather}/>
      </div>
    );
  }
}
App.defaultProps = {
  weather: []
}
App.propTypes = {
  weather: PropTypes.array.isRequired
}

function mapStateToProps(state){    //({weather}) {
 console.log('This is app state: ', state);
  return {weather : state.weatherRdc};
//  return { weather}; //{weather} === {weather:weather}
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(SearchBar);
export default connect(mapStateToProps)(App);
