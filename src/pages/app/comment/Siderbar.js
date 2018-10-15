/**
 * Created by Johnny Joestar on 2018/9/2.
 */
import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                    </ul>
                </section>
            </aside>
        )
    }
}