/**
 * Created by xiaomian on 2017/3/8.
 */
import { Layout,Icon, Menu} from 'antd';
import React from 'react';
import {browserHistory} from 'react-router';
const { SubMenu } = Menu;
const { Content,  Sider } = Layout;

class ToolLayout extends React.Component {
    constructor(props){
        super(props);
    }
    handleSiderMenu= (e) => {
        console.log('Received values of submenu: ', e.key);
        if(e.key == "perf"){
            browserHistory.push( 'perf');
        }else if(e.key == 'design'){
            browserHistory.push('design_tool');
        }
    }
    render() {
        return (

            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        style={{ height: '100%' }}
                        onClick={this.handleSiderMenu}
                    >
                        <Menu.Item key="perf">性能测试</Menu.Item>
                        <Menu.Item key="design">线上方案拷贝</Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 730 }}>
                    {this.props.children}
                </Content>
            </Layout>


        );
    }
}
export default ToolLayout;