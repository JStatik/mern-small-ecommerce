import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import logout from '../../../actions/auth/logout';

const PanelNavbar = () => {
    const { auth, dispatchAuth } = useContext( AuthContext );
    const { name } = auth;

    const handleLogout = () => {
        dispatchAuth( logout() );
    };

    return (
        <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <div>
                    <span className="text-white p-3">{ name }</span>
                    <button className="btn btn-outline-info" onClick={ handleLogout }>Logout</button>
                </div>
            </ul>
        </div>
    );
};

export default PanelNavbar;
