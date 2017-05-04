/**
 * Created by hezehong on 2017/4/18.
 */
import { Layout,Icon, Menu} from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import React from 'react';
import {browserHistory} from 'react-router';
import { Input, Col, Select, InputNumber, DatePicker, AutoComplete } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

const { SubMenu } = Menu;
const { Content,  Sider } = Layout;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

class InterfaceTool extends React.Component{
    callback = (key)=> {
        console.log(key);
    }
    state = {
        value: 1,
        httpMethod:"httpGet"
    }
    onRadioChange = (e) => {
        console.log('radio checked', e.target.value);
        //this.state.value = e.target.value
        this.setState({
            value: e.target.value,
        });
    }

    onHanderMenu = (e)=>{

    }

    onSelectHttpMethod = (value)=>{
        // this.state.httpMethod = value;
        console.log(`selected ${value}`);
        console.log(this.state.httpMethod == "httpGet")
        this.setState({
            httpMethod: value
        });
    }
    onSelectHttpMethod_excetCode = (value)=>{
        // this.state.httpMethod = value;
        console.log(`selected ${value}`);
        // console.log(this.state.httpMethod == "httpGet")
        // this.setState({
        //     httpMethod: value
        // });
    }

    ajaxPost = (value) =>{


    }

    render(){
        return(
            <div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="测试用例生成器" key="1">
                        <InputGroup compact>
                            <RadioGroup onChange={this.onRadioChange} value={this.state.value}>
                                <Radio value={1}>登录</Radio>
                                <Radio value={2}>不登录</Radio>


                            </RadioGroup>
                            <Select defaultValue="httpGet" onChange={this.onSelectHttpMethod}>
                                <Option value="httpGet">GET</Option>
                                <Option value="httpPost">POST</Option>

                            </Select>

                            <Select defaultValue="exceptCode_200" onChange={this.onSelectHttpMethod_excetCode}>
                                <Option value="exceptCode_200">200</Option>
                                <Option value="exceptCode_500">500</Option>
                                <Option value="exceptCode_401">401</Option>
                                <Option value="exceptCode_403">403</Option>
                            </Select>
                            <Input style={{ width: '50%' }} defaultValue="Enter Request URL" />
                            <Button type="dashed">Send</Button>
                            <Button type="dashed" icon="save">Save</Button>
                        </InputGroup>
                        <div>
                            {
                                this.state.httpMethod == "httpGet" ?
                                    <div>
                                        <br/>
                                        <label> headers</label>
                                        <Input type="textarea" rows={4} />
                                        <br/>
                                        <label> response</label>
                                        <Input type="textarea" rows={4} />
                                        <br/>
                                        <label> checkJSON</label>
                                        <Input type="textarea" rows={4} />
                                    </div>
                                    :
                                    <div>
                                        <br/>
                                        <label> headers</label>
                                        <Input type="textarea" rows={4} />
                                        <br/>
                                        <label> postMsg</label>
                                        <Input type="textarea" rows={4} />
                                        <br/>
                                        <label> response</label>
                                        <Input type="textarea" rows={4} />
                                        <br/>
                                        <label> checkJSON</label>
                                        <Input type="textarea" rows={4} />
                                    </div>
                            }
                        </div>

                    </TabPane>

                </Tabs>
            </div>
        )

    }


}

export default InterfaceTool;
/**
 * Created by admin on 2017/5/3.
 */
