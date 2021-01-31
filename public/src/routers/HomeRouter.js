import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import SingleProduct from '../pages/SingleProduct';
import Navbar from '../components/General/Navbar';

const HomeRouter = () => {
    return (
        <div style={ { display: 'flex', flexDirection: 'column', height: '100vh' } }>
            <Navbar />

            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/product/:idProduct" component={ SingleProduct } />

                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default HomeRouter;
