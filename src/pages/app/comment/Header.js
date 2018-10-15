/**
 * Created by Johnny Joestar on 2018/9/2.
 */
import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <button onClick={() => {
                        this.props.TokenStore.clearToken();
                        window.location.href = '/';
                    }}>退出
                    </button>
                </nav>
            </header>
        )
    }
}