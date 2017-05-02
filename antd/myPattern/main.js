/**
 * Created by admin on 2017/4/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Route , IndexRoute , browserHistory, hashHistory} from 'react-router';

import App from './App.js';
import layout from './mainLayout.js';
import Home from './lagyout/AutomationLayout.js';
import Story from './lagyout/test.js'

import { Layout, Menu, Breadcrumb, Icon,  } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class PlatLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: '2'
        }
    }

    render(){
        return(
            //<Layout style={{height:"100%"}}>
            //    <Header className="header">
            //        <div className="logo" />
            //        <Menu
            //            theme="dark"
            //            mode="horizontal"
            //            defaultSelectedKeys={['2']}
            //            style={{ lineHeight: '64px' }}
            //            >
            //            <Menu.Item key="1">接口测试</Menu.Item>
            //            <Menu.Item key="2">自动化测试</Menu.Item>
            //            <Menu.Item key="3">性能测试</Menu.Item>
            //        </Menu>
            //    </Header>
            //    <Content style={{ padding: '0 50px' }}>
            //        <Breadcrumb style={{ margin: '12px 0' }}>
            //            <Breadcrumb.Item>Home</Breadcrumb.Item>
            //            <Breadcrumb.Item>List</Breadcrumb.Item>
            //            <Breadcrumb.Item>App</Breadcrumb.Item>
            //        </Breadcrumb>
            //        <Layout style={{ padding: '24px 0', background: '#fff', height:'900px'}}>
            //        </Layout>
            //    </Content>
            //    <Footer style={{ textAlign: 'center' }}>
            //        Ant Design ?2016 Created by Ant UED
            //    </Footer>
            //</Layout>
            <div>
                <div>PPPPPPPPPPPPPPPPPPPPPPPPPP</div>
                {this.props.children}
                </div>
        )
    }
}
ReactDOM.render(
    //<! -- <App /> -->
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/Story" component={Story}/>
        </Route>
    </Router>,
    document.getElementById('app')
)