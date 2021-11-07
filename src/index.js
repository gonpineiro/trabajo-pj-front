import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout, Menu } from './screens/';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Menu} />
                    <Route exact path="/edificios" component={Menu} />
                </Switch>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
