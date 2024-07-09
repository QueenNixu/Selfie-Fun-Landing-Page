import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({ dropdownMenu, pathOrigin, options, onClick, fatherClass }) => {

  const location = useLocation();

  return (
    <>
      {options && options.map((option, index) => (
        <li key={index}>
          <Link to={`${pathOrigin}${option.path}`}
            className={`
              dropdown-link
              ${location.pathname.startsWith(`${pathOrigin}${option.path}`) ? "active" : ""}
              ${fatherClass === "dropdown-mobile" && index === 0 ? "first-item" : ""}
              ${fatherClass === "dropdown-mobile" && index === options.length - 1 ? "last-item" : ""}
            `}
            onClick={onClick}>
            {option.label}
          </Link>
        </li>
      ))}

    </>
  );
};

export default Dropdown;
