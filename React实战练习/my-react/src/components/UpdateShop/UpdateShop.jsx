import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Checkbox, Select, Radio } from 'element-react';
export default class UpateShop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: (window.location.search).substr(1),
            search: 0,
            form: {
                name: '',
                price: '',
                region: '',
                color: [],
                type: [],
                resource: '',
                desc: ''
            }
        };
    }
    onSubmit(e) {
        e.preventDefault();
    }

    onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
    }
    onOk() {
        axios.get('http://localhost:3030/update', { params: { gid: this.state.search, commodity: this.state.form, adminName: window.sessionStorage.getItem('adminName') } })
        this.initForm()
        alert('修改成功')
    }
    onClick() {
        //取消置为空
        this.initForm()
    }
    initForm() {
        this.setState({
            form: {
                name: '',
                price: '',
                region: '',
                color: [],
                type: [],
                resource: '',
                desc: ''
            }
        })
    }
    render() {
        return (
            <>
                <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
                    <Form.Item label="商品名称">
                        <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                    </Form.Item>
                    <Form.Item label="商品价格">
                        <Input value={this.state.form.price} onChange={this.onChange.bind(this, 'price')}></Input>
                    </Form.Item>
                    <Form.Item label="颜色">
                        <Checkbox.Group value={this.state.form.color} onChange={this.onChange.bind(this, 'color')}>
                            <Checkbox label="白" name="color"></Checkbox>
                            <Checkbox label="黑" name="color"></Checkbox>
                            <Checkbox label="黄" name="color"></Checkbox>
                            <Checkbox label="粉" name="color"></Checkbox>
                            <Checkbox label="红" name="color"></Checkbox>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item label="发货仓库">
                        <Select value={this.state.form.region} placeholder="请选择活动区域" onChange={this.onChange.bind(this, 'region')}>
                            <Select.Option label="广东广州" value="广东广州"></Select.Option>
                            <Select.Option label="北京朝阳" value="北京朝阳"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="商品优惠">
                        <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
                            <Checkbox label="包邮" name="type"></Checkbox>
                            <Checkbox label="正品保障" name="type"></Checkbox>
                            <Checkbox label="赠运费险" name="type"></Checkbox>
                            <Checkbox label="七天无理由退换" name="type"></Checkbox>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item label="支持付款">
                        <Radio.Group value={this.state.form.resource} onChange={this.onChange.bind(this, 'resource')}>
                            <Radio value="全额"></Radio>
                            <Radio value="花呗分期付"></Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="商品详情">
                        <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" nativeType="submit" onClick={this.onOk.bind(this)}>确定修改</Button>
                        <Button onClick={this.onClick.bind(this)}>取消</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}