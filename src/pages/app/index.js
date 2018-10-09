/**
 * Created by Johnny Joestar on 2018/9/1.
 */

import React from 'react'
import {Header, Siderbar} from './comment'
import Router from './router'

export default class extends React.Component {
    render(){
        return [
            <Header key="header"/>,
            <Siderbar key="siderbar"/>,
            <section key="section" className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Version 2.0</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i>Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                <section className="content">
                    <Router {...this.props}/>
                </section>
            </section>
        ]
    }
}