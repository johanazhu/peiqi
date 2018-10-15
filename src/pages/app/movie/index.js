/**
 * Created by Johnny Joestar on 2018/10/14.
 */

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import List from './list';
import Detail from './detail';

export default ({match}) => {
    console.log(match)
    return (
        <Switch>
            <Route path={`${match.url}/list`} component={List}/>
            <Route path={`${match.url}/detail`} component={Detail}/>
            <Route component={()=>(
                <Redirect push to={'/app/movie/list'}/>
            )}/>
        </Switch>
    )
}