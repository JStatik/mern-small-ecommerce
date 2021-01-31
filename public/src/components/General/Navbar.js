import React from 'react';
import OptionsNavbar from './Navbar/OptionsNavbar';
import PanelNavbar from './Navbar/PanelNavbar';
import TitleNavbar from './Navbar/TitleNavbar';

const Navbar = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
                <TitleNavbar title="e-Commerce" />

                <OptionsNavbar />

                <PanelNavbar />
            </nav>
        </div>
    );
};

export default Navbar;
