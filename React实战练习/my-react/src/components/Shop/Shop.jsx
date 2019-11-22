import React from 'react'
import './Shop.css'
import axios from 'axios'
import { Button, Modal, Form, Input, Descriptions } from 'antd';
//getFieldDecorator 用于和表单进行双向绑定，详见下方描述
class CollectionCreateForm extends React.Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="修改店铺信息"
                okText="确定"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <Form.Item label="店铺名称">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="店主">
                        {getFieldDecorator('boss', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="联系电话">
                        {getFieldDecorator('tel', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="营业时间">
                        {getFieldDecorator('time', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="店铺地址">
                        {getFieldDecorator('address', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="邮编">
                        {getFieldDecorator('youbian', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="其他">
                        {getFieldDecorator('description', {
                            rules: [{ required: true, whitespace: true, message: '必填!' }],
                        })(<Input type="textarea" />)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
CollectionCreateForm = Form.create()(CollectionCreateForm);

export default class Shop extends React.Component {

    state = {
        visible: false,
        Data: {
            name: "家有惠",
            boss: "admin",
            tel: "15986562365",
            time: "8:00-23:00",
            address: "广东省广州市天河区",
            youbian: "540000",
            description: '专注品牌服饰'
        }
    };

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
            axios.get('http://localhost:3000/shopdata', { params: values }).then(({ data }) => {
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
                    column={{ xxl: 4, xl: 2, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="店铺名称" >{this.state.Data.name}</Descriptions.Item>
                    <Descriptions.Item label="店主">{this.state.Data.boss}</Descriptions.Item>
                    <Descriptions.Item label="联系电话">{this.state.Data.tel}</Descriptions.Item>
                    <Descriptions.Item label="营业时间">{this.state.Data.time}</Descriptions.Item>
                    <Descriptions.Item label="店铺地址">{this.state.Data.address}</Descriptions.Item>
                    <Descriptions.Item label="邮编">{this.state.Data.youbian}</Descriptions.Item>
                    <Descriptions.Item label="其他">{this.state.Data.description}</Descriptions.Item>
                </Descriptions>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}