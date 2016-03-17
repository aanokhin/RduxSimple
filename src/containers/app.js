import React from 'react';
import { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import SearchBar from '../components/search_bar';
import WeatherList from '../components/weather_list';
import { fetchWeather} from '../actions/fetchIt'


export default class App extends Component {
  constructor(props){
    super(props);

    this.handleFetch = this.handleFetch.bind(this);
  };

  handleFetch( city) {
      //evt.preventDefault();
      const {dispatch} = this.props;
    dispatch(fetchWeather(city))
  };

  render() {
    const {weather} = this.props;
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
};
App.propTypes = {
  weather: PropTypes.array.isRequired
//  handleFetch: PropTypes.func.isRequired
};

function mapStateToProps(state){    //({weather}) {
 console.log('This is app state: ', state.WeatherReducer);
  const weather= state.WeatherReducer;
  return {weather};
//  return {weather : state.WeatherReducer.weather};
//  return { weather}; //{weather} === {weather:weather}
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(SearchBar);
export default connect(mapStateToProps)(App);