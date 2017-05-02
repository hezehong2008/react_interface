/**
 * Created by xiaomian on 2017/2/20.
 */
import React from 'react';
import { Form,DatePicker, Input, Icon, Select,Button } from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
let uuid = 0;
const downloadUrl="/platform/perf";
class TimeRelatedForm extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 0) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        uuid++;
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'range-time-picker': [
                    rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                    rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
            };
            console.log('Received values of form: ', values);
            $.ajax({
                url: downloadUrl,
                contentType: 'application/json;charset=utf-8',
                type:'GET',
                data:JSON.stringify(values),
                success: function(data) {

                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(downloadUrl, status, err.toString());
                }.bind(this)
            });
        });
    }


    render() {
        const { getFieldDecorator, getFieldValue  } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 6 },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: { span: 6, offset: 8 },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'param' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`param-${k}`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "Please input parameters in API",
                        }],
                    })(
                        <Input placeholder="parameter" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                </FormItem>
            );
        });

        return (
            <Form onSubmit={this.handleSubmit} style={{ minHeight: 753 }}>
                <FormItem
                    {...formItemLayout}
                    label="时间范围："
                >
                    {getFieldDecorator('range-time-picker', {
                        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
                    })(
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="输入API"

                >
                    {getFieldDecorator('api', {
                        rules: [{
                            required: true, message: 'Please input your API!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                {formItems}
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add parameter
                    </Button>
                </FormItem>
                <FormItem
                    labelCol={{span:8}}
                    wrapperCol={{ span: 2}}
                    label="请求方式"
                >
                    {getFieldDecorator('requestMethod', {
                        rules: [
                            { required: true, message: 'Please select http request method' },
                        ],
                    })(
                        <Select placeholder="http request method">
                            <Option value="get">get</Option>
                            <Option value="post">post</Option>
                            <Option value="delete">delete</Option>
                            <Option value="put">put</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType="submit" size="large">下载</Button>
                </FormItem>
            </Form>
        );
    }
}
const PlatformPerfLayout = Form.create()(TimeRelatedForm);
export default PlatformPerfLayout;