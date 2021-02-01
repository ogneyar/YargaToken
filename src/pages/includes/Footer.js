import React from 'react';
import './Footer.css';

export default function Footer(props) {
    return (
        <div className="footer">
            <h3>{props.title}</h3>
        </div>
    );
}