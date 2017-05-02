/**
 * Created by xiaomian on 2017/2/7.
 */
import { Layout,Icon, Menu} from 'antd';
import React from 'react';
import {browserHistory} from 'react-router';
const { SubMenu } = Menu;
const { Content,  Sider } = Layout;

class ConstrDataLayout extends React.Component {
    constructor(props){
        super(props);
    }
    handleSiderMenu= (e) => {
        console.log('Received values of submenu: ', e.key);
        if(e.key == "constr1"){
            browserHistory.push( 'constr_alpha');
        }else if(e.key == 'constr2'){
            browserHistory.push('constr_beta');
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
                        <SubMenu key="sub1" title={<span><Icon type="laptop" />施工图</span>}>
                            <Menu.Item key="constr1">alpha</Menu.Item>
                            <Menu.Item key="constr2">beta</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />模型烘焙</span>}>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 730 }}>
                        {this.props.children}
                </Content>
            </Layout>


        );
    }
}
export default ConstrDataLayout;