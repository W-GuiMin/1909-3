import React from 'react'
import './Shop.css'
// export default class Shop extends React.Component {
//     render() {
//         return (
//             <div>商铺信息</div>
//         )
//     }
// }


import { Button, Modal, Form, Input } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="修改店铺信息"
                    boss=""
                    tel=""
                    address=""
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="店铺名称">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: '必填!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="店主">
                            {getFieldDecorator('boss', {
                                rules: [{ required: true, message: '必填!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="联系电话">
                            {getFieldDecorator('tel', {
                                rules: [{ required: true, message: '必填!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="店铺地址">
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: '必填!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="详细信息">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

export default class Shop extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    修改店铺信息
        </Button>
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