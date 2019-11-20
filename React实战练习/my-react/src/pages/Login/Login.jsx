import React from 'react';
import './Login.css';
import ALogin from '../../components/ALogin/ALogin'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export default class Login extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Header>家有购物后台管理系统</Header>
                    <Content>
                        <ALogin history={this.props.history} />
                    </Content>
                    <Footer>JiaYou Shopping ©2018 Created by JiaYaouHui</Footer>
                </Layout>
            </>
        )
    }
}