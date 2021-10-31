import React from 'react';
import './Header.css';

export const Header = (props) =>{
    return (
        <header className="App-header">
            <h3>{props.header}</h3>
        </header>
    );
}