import React from 'react';
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--secondary", "btn--third", "btn--outline-r", "btn--outline-g", "btn--outline-b"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({children, type, onClick, btnStyle, btnSize, path}) => {
    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
        <Link to={path} className='btn-mobile'>
            <button
            className={`btn ${checkBtnStyle} ${checkBtnSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}