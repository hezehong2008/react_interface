import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Route , IndexRoute , browserHistory} from 'react-router';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon,Table, Input,Button, Popconfirm,Alert,Form } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import ConstrTableAlpha from './constr/constrTableAlpha';
import ConstrTableBeta from './constr/constrTableBeta';
import ConstrDataLayout from './constrDataLayout';
import PlatformPerfLayout from './perf/platformPerfLayout';
import ToolLayout from './toolLayout';
import DesignToolLayout from './design/designToolLayout';

import InterfaceLayout from './layout/layoutInterface.js';
import AutomationLayout from './layout/layoutAutomation.js';
import submitForm from './layout/submitForm.js';
import InterfaceTool from './layout/interfaceCnstr/tool.js';
/**
 * PlatformLayout
 */
class PlatformLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: '1'
        }
    }
    handleTopMenu= (e) => {
        if(e.key == "1"){
            browserHistory.push("/interface");
        }else if(e.key == '2'){
            browserHistory.push("/Automation" );
        }
        else if(e.key == '3'){
            browserHistory.push("/test")
        }
        this.setState({
            current: e.key
        });

    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        selectedKeys={[this.state.current]}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleTopMenu}
                    >
                        <Menu.Item key="1">接口测试</Menu.Item>
                        <Menu.Item key="2">自动化</Menu.Item>
                        <Menu.Item key="3">测试工具</Menu.Item>
                        <Menu.Item key="4">性能测试</Menu.Item>
                        <Menu.Item key="5">安全测试</Menu.Item>
                        <Menu.Item key="5">待添加....</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                    </Breadcrumb>
                    {this.props.children}

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2017 Created by HeZehong
                </Footer>
            </Layout>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={PlatformLayout}>
            <IndexRoute component={InterfaceLayout}/>
            <Route path="interface" component={InterfaceLayout}/>
                <Route component={InterfaceLayout}>
                    <Route path="/interface/tool" component={InterfaceTool}></Route>

                </Route>

            <Route path="Automation" component={AutomationLayout}/>
            <Route path="test" component={submitForm}/>
        </Route>
    </Router>
    ,document.getElementById('root'));
