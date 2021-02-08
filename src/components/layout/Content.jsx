import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../../views/pages/About';
import Home from '../../views/pages/Home';

export default function Content(props) {
    return (
        <main className="Content">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    );
};