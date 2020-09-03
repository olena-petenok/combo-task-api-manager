import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './button.sass';

import { BUTTON_OK } from '../../constants/strings.js';

// import {  } from '../../utils/helper.js';

function Button(props) {
  const { parentFunction, buttonValue, decoration } = props;
  const onButtonClick = event => { props.parentFunction(); }

  return ( <input className={`button ${decoration}`} type="button" value={buttonValue} onClick={onButtonClick} /> );
}

Button.propTypes = {
  parentFunction: PropTypes.func,
  buttonValue: PropTypes.string,
  decoration: PropTypes.string
};

Button.defaultProps = {
  parentFunction: () => { console.log("Invalid props.parentFunction"); },
  buttonValue: BUTTON_OK,
  decoration: ""
};

export default Button;
