import React from 'react'
import './ALogin.css'
import { Button, Form, Input } from 'element-react';
// import { program } from '@babel/types';
import axios from 'axios'
export default class ALogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                admin: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                admin: [
                    { required: true, message: '请输入管理员账号', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            } else {
                                if (this.state.form.checkPass !== '') {
                                    this.refs.form.validateField('checkPass');
                                }
                                callback();
                            }
                        }
                    }
                ],
                checkPass: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.state.form.pass) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }
                    }
                ]
            }
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                axios.get('http://localhost:3030/loginname', {
                    params: {
                        adminName: this.state.form.admin
                    }
                }).then(({ data }) => {
                    let Data = data
                    if (Data.length) {
                        if (Data[0].password === this.state.form.pass) {
                            window.sessionStorage.setItem('adminName', this.state.form.admin)
                            window.sessionStorage.setItem('adminData', JSON.stringify(Data[0].shop))
                            this.props.history.push('/main')
                        } else {
                            alert('密码错误!');
                        }
                    } else {
                        alert('该账号不是管理员!');
                    }
                })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.refs.form.resetFields();
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    render() {
        return (
            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                <p className="title">登录</p>
                <Form.Item label="账号" prop="admin">
                    <Input value={this.state.form.admin} onChange={this.onChange.bind(this, 'admin')}></Input>
                </Form.Item>
                <Form.Item label="密码" prop="pass">
                    <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
                </Form.Item>
                <Form.Item label="确认密码" prop="checkPass">
                    <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                    <Button onClick={this.handleReset.bind(this)}>重置</Button>
                </Form.Item>
            </Form>
        )
    }

}

