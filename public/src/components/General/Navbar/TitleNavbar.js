import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TitleNavbar = ( { title } ) => {
    return (
        <Link className="navbar-brand" to="/">{ title }</Link>
    );
};

TitleNavbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleNavbar;
