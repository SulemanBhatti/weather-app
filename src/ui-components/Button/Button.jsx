import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export const Button = props =>
  !props.link ? (
    <button
      className={'button'}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type}
    >
      {props.loading ? 'Loading...' : 'View city on map'}
    </button>
  ) : (
    <Link
      className={'button'}
      to={props.link}
    >
      {props.children}
    </Link>
  );
