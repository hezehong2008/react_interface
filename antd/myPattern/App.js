/**
 * Created by admin on 2017/4/13.
 */
import React from 'react';
import { DatePicker } from 'antd';
import { Layout, Menu, Breadcrumb, Icon,  } from 'antd';
import interfaceLayout from  './lagyout/InterfaceLayout.js'

import 'antd/lib/date-picker/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/breadcrumb/style/css';
import 'antd/lib/icon/style/css'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout style={{height:"100%"}}>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        >
                        <Menu.Item key="1">接口测试</Menu.Item>
                        <Menu.Item key="2">自动化测试</Menu.Item>
                        <Menu.Item key="3">性能测试</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff', height:'900px'}}>
                    <interfaceLayout />
                            <p>********************************************************</p>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ?2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}


export default App;