import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

export default function Footer(props) {
    return (
        <div className="footer">
            <NavLink className="NavLink_footer" to="/">{props.title}</NavLink>
        </div>
    );
}