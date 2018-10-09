/**
 * Created by Johnny Joestar on 2018/9/2.
 */
import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <header className="main-header">
                <a href="../index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">切换导航</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li><a href="http://almsaeedstudio.com">almsaeed工作室</a></li>
                            <li><a href="http://almsaeedstudio.com/premium">高级模板</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}