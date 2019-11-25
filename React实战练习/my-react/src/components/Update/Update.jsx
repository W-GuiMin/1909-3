import React from 'react'
import './Update.css'
import { Table } from 'antd';
import {
    Link
} from "react-router-dom";
const columns = [
    {
        title: '产品编号',
        dataIndex: 'gid',
        key: 'gid',
        render: text => <Link to={{
            pathname: '/updateshop',
            search: text,
            state:text
        }}>{text}</Link>
    },
    {
        title: '产品名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: '发货地',
        dataIndex: 'region',
        key: 'region'
    }
];

const data = JSON.parse(window.sessionStorage.getItem('commodityData'))
export default class Update extends React.Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}
