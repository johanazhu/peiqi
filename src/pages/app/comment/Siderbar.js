/**
 * Created by Johnny Joestar on 2018/9/2.
 */
import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <aside className="main-sidebar">
                <div className="sidebar" id="scrollspy">
                    <ul className="nav sidebar-menu">
                        <li className="header">条目列表</li>
                        <li className="active"><a href="#introduction"><i className="fa fa-circle-o"></i> 介绍</a></li>
                        <li><a href="#download"><i className="fa fa-circle-o"></i> 下载 </a></li>
                        <li><a href="#dependencies"><i className="fa fa-circle-o"></i> 依赖项</a></li>
                        <li><a href="#advice"><i className="fa fa-circle-o"></i> 建议</a></li>
                        <li><a href="#layout"><i className="fa fa-circle-o"></i> 布局</a></li>
                        <li><a href="#adminlte-options"><i className="fa fa-circle-o"></i> Javascript 选项</a></li>
                        <li className="treeview" id="scrollspy-components">
                            <a href="javascript:void(0)"><i className="fa fa-circle-o"></i> 组件</a>
                            <ul className="nav treeview-menu">
                                <li><a href="#component-main-header">Main Header 页眉</a></li>
                                <li><a href="#component-sidebar">Sidebar 侧边栏</a></li>
                                <li><a href="#component-control-sidebar">Control Sidebar 弹出侧边栏</a></li>
                                <li><a href="#component-info-box">Info Box 信息标签</a></li>
                                <li><a href="#component-box">Boxes各种层（盒子）</a></li>
                                <li><a href="#component-direct-chat">Direct Chat 即时聊天</a></li>
                            </ul>
                        </li>
                        <li><a href="#plugins"><i className="fa fa-circle-o"></i> 插件</a></li>
                        <li><a href="#browsers"><i className="fa fa-circle-o"></i> 浏览器兼容</a></li>
                        <li><a href="#upgrade"><i className="fa fa-circle-o"></i> 升级指南</a></li>
                        <li><a href="#实例/模板"><i className="fa fa-circle-o"></i> 实例/模板</a></li>
                        <li><a href="#faq"><i className="fa fa-circle-o"></i> FAQ</a></li>
                        <li><a href="#license"><i className="fa fa-circle-o"></i> 许可协议</a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}