import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import navigator sub-components
import Header from './header/Header';
import Search from './Search';

export default class Navigator extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="navigator">
        <Header></Header>
        <Search></Search>
      </div>
    );
  }
}
