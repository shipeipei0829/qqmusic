import React, { Component } from 'react'
import './index.css'

import { NavLink } from 'react-router-dom'
import Router from '../../router/index'//路由模板
import HomeRoutes from '../../router/Home'//二级路由


class Index extends Component {
    constructor() {
        super()
    }  
    
    render() {
        return (
            <div className="index">
                {/* 头部 */}
                <header className="top_box">
                    <div className="top_box_bd">
                        <img className="logo" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt="" />
                        <a className="top_box_btn" href="javascript:;">下载APP</a>
                    </div>
                </header>
                {/* 导航 */}
                <div className="nav">
                    <NavLink activeClassName="select" to="/index/tuijian">推荐</NavLink>
                    <NavLink activeClassName="select" to="/index/top">排行榜</NavLink>
                    <NavLink activeClassName="select" to="/index/search">搜索</NavLink>
                </div>
                {/* 二级视图区 */}
                <Router routes={HomeRoutes} />
                
                {/* 底部固定 */}
                <div className="bottom_bar">
                    <a href="javascript:;" className="bottom_bar__action">安装QQ音乐 发现更多精彩</a>
                </div>
            </div>
        )
    }
}
export default Index

