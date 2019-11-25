import React from 'react'
import axios from 'axios'
import { Table, Popconfirm, Form } from 'antd';
//定义子表显示
const EditableContext = React.createContext();
const EditableFormRow = Form.create()(({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
));

class EditableCell extends React.Component {
    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children } = this.props;

        return <div
            className="editable-cell-value-wrap"
            style={{ paddingRight: 24 }}
        >
            {children}
        </div>
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                        children
                    )}
            </td>
        );
    }
}

export default class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '商品名',
                dataIndex: 'name',
                editable: true,
            },
            {
                title: '商品编号',
                dataIndex: 'gid',
            },
            {
                title: '商品价格',
                dataIndex: 'price',
            },
            {
                title: '发货仓库',
                dataIndex: 'region',
            },
            {
                title: '优惠',
                dataIndex: 'type',
            },
            {
                title: '支持付款方式',
                dataIndex: 'resource',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(record.key)}>
                            <span>删除</span>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [],
            count: 0,
        };
    }
    componentDidMount() {
        if (window.sessionStorage.getItem('commodityData')) {
            this.setState({
                dataSource: JSON.parse(window.sessionStorage.getItem('commodityData')),
                count: JSON.parse(window.sessionStorage.getItem('commodityData')).length
            })
        } else {
            this.initData()
        }
    }
    initData() {
        axios.get('http://localhost:3030/commodity', { params: { adminName: window.sessionStorage.getItem('adminName') } }).then(({ data }) => {
            let Data = data.map((item, index) => {
                return {
                    key: index,
                    gid: item.gid,
                    name: item.commodity.name,
                    price: item.commodity.price,
                    region: item.commodity.region,
                    type: item.commodity.type,
                    resource: item.commodity.resource,
                    desc: item.commodity.desc
                }
            })
            console.log(Data)
            this.setState({
                data: Data,
                count: Data.length
            })
            window.sessionStorage.setItem('commodityData', JSON.stringify(Data))
        })
    }



    handleDelete = key => {
        console.log(key)
        const dataSource = [...this.state.dataSource];
        console.log(dataSource[key].gid)
        axios.get('http://localhost:3030/del', { params: { adminName: window.sessionStorage.getItem('adminName'), gid: dataSource[key].gid } })
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        window.sessionStorage.setItem('commodityData', JSON.stringify(this.state.dataSource))
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}