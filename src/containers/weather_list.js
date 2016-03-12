import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';


class WeatherList extends Component {
//   constructor(props) {
//     super(props);
//     //this.state = {weather: []};
//     this.renderWeather = this.renderWeather.bind(this);
// }
  renderWeather(cityData){
    console.log('cityData: ', cityData);
    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

  render () {
    console.log('in render: ', this.props.weather);
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

WeatherList.defaultProps = {
  weather: []
}
WeatherList.propTypes = {
  weather: PropTypes.array
}
// function mapStateToProps(state){    //({weather}) {
//   return {weather : state.weather };
// //  return { weather}; //{weather} === {weather:weather}
// }
//
 export default WeatherList;
 //connect(mapStateToProps)(WeatherList);
