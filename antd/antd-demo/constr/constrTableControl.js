/**
 * Created by xiaomian on 2017/2/7.
 */
import { Input,Button,Form } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
const FormItem = Form.Item;

const ConstrFormControl = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        var designId = ReactDOM.findDOMNode(this.refs['designId']).value.trim();
        if (!designId) {
            return;
        }
        this.props.onDesignIdSubmit(designId);
        ReactDOM.findDOMNode(this.refs['designId']).value= '';
        return;
    },
    handleSave(){
        this.props.onSave();
    },
    handleExe(){
        this.props.onConstrExe();
    },
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormItem>
                    <Input placeholder="designId" style={{ width: 200 }}  ref="designId"/>

                </FormItem>
                <FormItem>
                    <Button className="editable-add-btn" type="ghost" htmlType="submit">Add</Button>
                </FormItem>
                <FormItem>
                    <Button className="execute-btn" type="primary" onClick={this.handleExe}>执行回归</Button>
                </FormItem>
            </Form>
        );
    },
}));

export default ConstrFormControl;