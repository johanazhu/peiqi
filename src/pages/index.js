/**
 * Created by Johan on 2018/7/7.
 */

import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import App from './app'

export default function () {
    return (
        <Switch>
            <Route path="/app" component={App}/>
            <Route component={() => (
                <div>404</div>
            )}/>
        </Switch>
    )
}