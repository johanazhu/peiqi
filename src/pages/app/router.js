/**
 * Created by Johnny Joestar on 2018/9/2.
 */

import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './home/router'

export default ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}/home`} component={Home}></Route>
            <Route component={() => (<div>404</div>)}></Route>
        </Switch>
    )
}