import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon';
import NavButton from './NavButton';

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='header'>
        <div>
            <Icon></Icon>
            <h1>&lt;Code&gt;Digital</h1>
        </div>
        
      </div> 
    )
  }
}
