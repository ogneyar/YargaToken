import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <div className="header">
            <div className="title">
                <h1>{props.title}</h1>
            </div>

            <NavLink className="NavLink" to="/">Главная</NavLink>
            <NavLink className="NavLink" to="/about">О нас</NavLink>

        </div>
    );
}