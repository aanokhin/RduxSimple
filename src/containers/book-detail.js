import React, {Component} from 'react';
import {connect} from 'react-redux';

export class BookDetail extends Component {
  render() {
    console.log('this.props.book: ', this.props.book);
    if (!this.props.book) {
      return <div> To be selected</div>;
    }

    return (
      <div>
        <h3> Details for: </h3>
        <div> {this.props.book.title}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  //Whatever returns will show up as props
  //inside of BookDetail
  return {
    book: state.activeBook
  };
}


export default connect(mapStateToProps)(BookDetail);
