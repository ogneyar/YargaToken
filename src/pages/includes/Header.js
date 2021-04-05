import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header(props) {
    return (
        <div className="header">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="NavLink_div">
                <NavLink className="NavLink" to="/">Главная</NavLink>
                <NavLink className="NavLink" to="/about">О нас</NavLink>
                <NavLink className="NavLink" to="/projects">Проекты</NavLink>
                <NavLink className="NavLink" to="/consulting">КОНсалтинг</NavLink>
                {/* <NavLink className="NavLink" to="/test">Тест</NavLink> */}
            </div>
        </div>
    );
}