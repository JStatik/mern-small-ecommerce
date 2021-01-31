import React from 'react';
import './loadingHome.css';

const LoadingHome = () => {
    return (
        <div className="container-loading-home">
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    );
};

export default LoadingHome;
