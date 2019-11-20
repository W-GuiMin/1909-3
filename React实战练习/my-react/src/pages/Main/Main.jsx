import React from 'react'
import './Main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import AMain from '../../components/AMain/AMain';
import Shop from '../../components/Shop/Shop'
import Client from '../../components/Client/Client'
import Add from '../../components/Add/Add'
import Update from '../../components/Update/Update'
import Delete from '../../components/Delete/Delete'
import Order from '../../components/Order/Order'
import Physical from '../../components/Physical/Physical'
import Sales from '../../components/Sales/Sales'
import Exchange from '../../components/Exchange/Exchange'
// import Earnings from '../../components/Earnings/Earnings'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <>
                <Router>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" >
                                {/* <img src="../../asstes.gif" alt="" /> */}
                            </div>
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <Link to="/main">
                                        <Icon type="home" />
                                        <span>首页</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/shop">
                                        <Icon type="shop" />
                                        <span>店铺信息管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/client">
                                        <Icon type="user" />
                                        <span>客户信息管理</span>
                                    </Link>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="shopping-cart" />
                                            <span>产品管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="4"><Link to="/add">上新产品信息</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/update">修改产品信息</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/delete">删除产品信息</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="7">
                                    <Link to="/order">
                                        <Icon type="profile" />
                                        <span>订单管理</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="physical">
                                        <Icon type="car" />
                                        <span>物流状态</span>
                                    </Link>
                                </Menu.Item>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="desktop" />
                                            <span>售后/退换货</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9"><Link to="sales">退货信息</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to="exchange">换货信息</Link></Menu.Item>
                                </SubMenu>
                                {/* <Menu.Item key="11">
                                    <Link to="earnings">
                                        <Icon type="dollar" />
                                        <span>收益统计</span>
                                    </Link>
                                </Menu.Item> */}
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#c53c56', color: '#fff', fontSize: '20px' }} >  家有购物后台管理系统</Header>
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                                    <Switch>
                                        <Route path='/main'>
                                            <AMain />
                                        </Route>
                                        <Route path='/shop'>
                                            <Shop />
                                        </Route>
                                        <Route path='/client'>
                                            <Client />
                                        </Route>
                                        <Route path='/update'>
                                            <Update />
                                        </Route>
                                        <Route path='/add'>
                                            <Add />
                                        </Route>
                                        <Route path='/delete'>
                                            <Delete />
                                        </Route>
                                        <Route path='/order'>
                                            <Order />
                                        </Route>
                                        <Route path='/physical'>
                                            <Physical />
                                        </Route>
                                        <Route path='/sales'>
                                            <Sales />
                                        </Route>
                                        <Route path='/exchange'>
                                            <Exchange />
                                        </Route>
                                        {/* <Route path='/earnings'>
                                            <Earnings />
                                        </Route> */}
                                    </Switch>

                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>JiaYou Shopping ©2018 Created by JiaYaouHui</Footer>
                        </Layout>
                    </Layout>
                </Router>
                <Redirect from="main" to="/main" />
            </>
        );
    }
}