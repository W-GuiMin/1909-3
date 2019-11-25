import React from 'react'
import './Shop.css'
import axios from 'axios'
import { Button, Modal, Form, Input, Descriptions } from 'antd';
//getFieldDecorator 用于和表单进行双向绑定，详见下方描述
class CollectionCreateForm extends React.Component {
    render() {
        const { visible, content, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                content={content}
                title="修改店铺信息"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    {
                        content.map((item, index) => {
                            return <Form.Item key={index} label={item.title}>
                                {getFieldDecorator(item.titleIndex, {
                                    rules: [{ required: true, whitespace: true, message: '必填!' }],
                                })(<Input />)}
                            </Form.Item>
                        })
                    }
                </Form>
            </Modal>
        );
    }
}
CollectionCreateForm = Form.create()(CollectionCreateForm);

export default class Shop extends React.Component {

    state = {
        visible: false,
        Data: JSON.parse(window.sessionStorage.getItem('adminData')),
        content: [{
            title: "店铺名称",
            titleIndex: 'name'
        }, {
            title: "店主",
            titleIndex: 'boss'
        }, {
            title: "联系电话",
            titleIndex: 'tel'
        }, {
            title: "营业时间",
            titleIndex: 'time'
        }, {
            title: "店铺地址",
            titleIndex: 'address'
        }, {
            title: "邮编",
            titleIndex: 'youbian'
        }, {
            title: "其他",
            titleIndex: 'description'
        }]
    };
    m
    showModal = () => {
        this.setState({ visible: true });
    };
    //取消
    handleCancel = () => {
        const { form } = this.formRef.props;
        form.resetFields();
        this.setState({ visible: false });
    };
    //确定
    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            this.setState({
                Data: values
            })
            window.sessionStorage.setItem('adminData', JSON.stringify(values))
            axios.get('http://localhost:3030/shopdata', { params: { values: values, adminName: window.sessionStorage.getItem('adminName') } }).then(({ data }) => {
                console.log(data)
            })
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            < div className="shopmain">
                <Button type="primary" onClick={this.showModal}>修改店铺信息</Button>
                <Descriptions
                    title="店铺信息"
                    bordered
                    column={{ xxl: 2, xl: 1, lg: 3, md: 3, sm: 3, xs: 1 }}
                >
                    {
                        this.state.content.map((item, index) => {
                            return <Descriptions.Item key={index} label={item.title} >{this.state.Data[item.titleIndex]}</Descriptions.Item>
                        })
                    }
                </Descriptions>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    content={this.state.content}
                />
            </div>
        );
    }
}