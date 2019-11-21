import React from 'react'
import axios from 'axios'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

export default class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data: []
        };
    }
    componentDidMount() {
       if(window.sessionStorage.getItem('userData')){
           this.setState({
               data:JSON.parse(window.sessionStorage.getItem('userData'))
           })
       }else{
        axios.get('http://localhost:3030/users').then(({ data }) => {
            let Data = data.map((item, index) => {
                return {
                    key: index,
                    id: item.id,
                    name: item.userName,
                    commodity: item.commodity,
                    tel: item.tel,
                    price: item.price,
                    address: item.address
                }
            })
            this.setState({
                data: Data
            })
            window.sessionStorage.setItem('userData',JSON.stringify(Data))
        })
       }
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
        </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
        </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: '订单编号',
                dataIndex: 'id',
                key: 'id',
                ...this.getColumnSearchProps('id'),
            },
            {
                title: '商品',
                dataIndex: 'commodity',
                key: 'commodity',
                ...this.getColumnSearchProps('commodity'),
            },
            {
                title: '手机号',
                dataIndex: 'tel',
                key: 'tel'
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price'
            },
            {
                title: '收货地址',
                dataIndex: 'address',
                key: 'address',
                ...this.getColumnSearchProps('address'),
            },
        ]
        return (<Table columns={columns} dataSource={this.state.data} />);
    }
}