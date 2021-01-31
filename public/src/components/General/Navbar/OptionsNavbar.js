import React from 'react';
import { NavLink } from 'react-router-dom';

const OptionsNavbar = () => {
    return (
        <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
            </div>
        </div>
    );
};

export default OptionsNavbar;
