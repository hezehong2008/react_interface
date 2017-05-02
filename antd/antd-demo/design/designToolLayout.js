/**
 * Created by xiaomian on 2017/3/8.
 */
import React from 'react';
import { Form, Icon, Input, Button,notification } from 'antd';
const FormItem = Form.Item;
const copyDesignUrl='/platform/copydesign';

class HorizontalDesignForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            $.ajax({
                url: copyDesignUrl,
                contentType: 'application/xml; charset=utf-8',
                type:'POST',
                data: JSON.stringify(values),
                success: function(data) {
                    if(data==1){
                        notification.open({
                            message: '上传成功',
                            description: '方案：'+values['planid']+'成功上传至用户'+values['account'],
                        });
                    }else{
                        notification.open({
                            message: '上传失败',
                            description: '方案：'+values['planid']+'上传用户'+values['account']+'失败',
                        });
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(copyDesignUrl, status, err.toString());
                    notification.open({
                        message: '上传失败',
                        description: '方案：'+values['planid']+'上传用户'+values['account']+'失败',
                    });
                }.bind(this)
            });
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="登录账号："
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                >
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: 'Please input your account!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="Password"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input type="password"/>
                    )}
                </FormItem>
                <FormItem
                    label="混淆planId："
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 8 }}
                >
                    {getFieldDecorator('planid', {
                        rules: [{ required: true, message: 'Please input your planId!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: { span: 8, offset: 0 },
                        sm: { span: 8, offset: 4 },
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        一键复制到内网
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const DesignToolLayout = Form.create()(HorizontalDesignForm);
export default DesignToolLayout;