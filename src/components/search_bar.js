import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather} from '../actions/fetchIt'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('CALLED preventDefault()');
    this.props.handleFetch(this.state.term);
    this.setState({term: ''});
  }
render () {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder= "Get a five-day forecast in your favorite sities"
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
};
SearchBar.propTypes = {
  handleFetch: PropTypes.func.isRequired
};

export default SearchBar;