import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export const Button = props =>
  !props.link ? (
    <button
      className={'button'}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  ) : (
    <Link
      className={'button'}
      to={props.link}
    >
      {props.label}
    </Link>
  );
