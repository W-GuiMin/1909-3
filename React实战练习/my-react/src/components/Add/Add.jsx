import React from 'react'
import { Button, Form, Input, Layout, DatePicker, Checkbox, Switch, Select, TimePicker, Radio } from 'element-react';
export default class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                price: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
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
    onClick() {
        this.setState({
            form: {
                name: '',
                price: '',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
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
                    <Form.Item label="发货地址">
                        <Select value={this.state.form.region} placeholder="请选择活动区域">
                            <Select.Option label="广东广州" value="shanghai"></Select.Option>
                            <Select.Option label="广东深圳" value="beijing"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="上新时间">
                        <Layout.Col span="11">
                            <Form.Item prop="date1" labelWidth="0px">
                                <DatePicker
                                    value={this.state.form.date1}
                                    placeholder="选择日期"
                                    onChange={this.onChange.bind(this, 'date1')}
                                />
                            </Form.Item>
                        </Layout.Col>
                        <Layout.Col className="line" span="2">-</Layout.Col>
                        <Layout.Col span="11">
                            <Form.Item prop="date2" labelWidth="0px">
                                <TimePicker
                                    value={this.state.form.date2}
                                    selectableRange="18:30:00 - 20:30:00"
                                    placeholder="选择时间"
                                    onChange={this.onChange.bind(this, 'date2')}
                                />
                            </Form.Item>
                        </Layout.Col>
                    </Form.Item>
                    <Form.Item label="即时配送">
                        <Switch
                            onText=""
                            offText=""
                            value={this.state.form.delivery}
                            onChange={this.onChange.bind(this, 'delivery')}
                        />
                    </Form.Item>
                    <Form.Item label="商品优惠">
                        <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
                            <Checkbox label="赠运费险" name="type"></Checkbox>
                            <Checkbox label="正品保障" name="type"></Checkbox>
                            <Checkbox label="包邮" name="type"></Checkbox>
                            <Checkbox label="七天无理由退换" name="type"></Checkbox>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item label="支持付款">
                        <Radio.Group value={this.state.form.resource}>
                            <Radio value="全额"></Radio>
                            <Radio value="花呗分期付"></Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="商品详情">
                        <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" nativeType="submit">确定上新</Button>
                        <Button onClick={this.onClick.bind(this)}>取消</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}