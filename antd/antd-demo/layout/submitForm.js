/**
 * Created by admin on 2017/4/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Input, ICON, Tooltip, Checkbox, Row, Col, Select, InputNumber, DatePicker, AutoComplete, Form } from 'antd';
import {Button} from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const FormItem = Form.Item;

class CompactDemo extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    };
    state = {
        dataSource: [],
    };
    handleChange = (value) => {
        this.setState({
            dataSource: !value || value.indexOf('@') >= 0 ? [] : [
                `${value}@gmail.com`,
                `${value}@163.com`,
                `${value}@qq.com`,
            ],
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        // Only show error after a field is touched.
        const { getFieldDecorator } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <br />
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>

                    </Form>
                <InputGroup compact>
                    <Select defaultValue="GET" style={{width: "10%"}}>
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                        <Option value="HEAD">HEAD</Option>
                        <Option value="PUT">PUT</Option>
                        <Option value="DELETE">DELETE</Option>
                    </Select>
                    <Input style={{ width: '50%' }} defaultValue="http://" />
                    <Button icon="play-circle" size="large" htmlType="submit" type="dashed">Send</Button>
                    <Button icon="save" size="large" htmlType="submit" type="dashed">Save</Button>
                    <br />
                    <label>header</label><Input type="textarea" style={{}}/>
                    <br />
                    <label>body</label><Input type="textarea" />
                </InputGroup>
                <br />
            </div>
        );
    }
}

export default CompactDemo;

