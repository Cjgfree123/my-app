import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'dva'

import { NavLink } from 'dva/router'
import './index.less';

class SideMenu extends Component {

    render() {
        return (
            <div id="side-menu">
                <Menu
                    selectedKeys={[]}
                    mode="vertical"
                    theme="dark"
                >
                    <Menu.Item key="/users">
                        <NavLink to="/users">
                            <Icon type="bars" />Users
                    </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/">
                        <NavLink to="/">
                            <Icon type="home" />Home
                    </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/404">
                        <NavLink to="/page-you-dont-know">
                            <Icon type="frown-circle" />404
                    </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/antd">
                        <a href="https://github.com/dvajs/dva">dva</a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default connect()(SideMenu)