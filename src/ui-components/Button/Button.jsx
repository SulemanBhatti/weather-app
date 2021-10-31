import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export const Button = props =>(
    <Link
      className={'button'}
      to={props.link}
    >
      {props.label}
    </Link>
  );
