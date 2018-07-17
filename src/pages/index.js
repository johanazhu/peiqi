/**
 * Created by Johan on 2018/7/7.
 */

import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import Home from './Home'

export default function () {
    return (
        <div>
            <header>
                <Link to="/app">首页</Link>
                <Link to="/about">about</Link>
            </header>
            <Switch>
                <Route path="/app" component={() => {
                    return <div>首页 <Home/></div>
                }}/>
                <Route path="/about" component={() => {
                    return <div>peiqi</div>
                }}/>
                <Route component={() => {
                    return <div>404</div>
                }}/>
            </Switch>
        </div>
    )
}