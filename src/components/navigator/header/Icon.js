import React, { Component } from 'react'
import PropTypes from 'prop-types'

import codeArrowIcon from './codeArrowIcon.png';

export default class Icon extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <img alt="N/A" src={codeArrowIcon}></img>
      </div>
    )
  }
}
