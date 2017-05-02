/**
 * Created by hezehong on 2017/4/18.
 */
import { Layout,Icon, Menu} from 'antd';
import { Tree, Input } from 'antd';
import React from 'react';
import {browserHistory} from 'react-router';
const { SubMenu } = Menu;
const {MenuItemGroup} = Menu.ItemGroup
const { Header, Content, Footer, Sider } = Layout;

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import {tree} from 'antd';
const TreeNode = Tree.TreeNode

class LayoutInterface extends React.Component{
    state = {
        collapse: false,
        mode: 'inline',
    };

    oncollapse = (collapsed)=>{
        console.log(collapsed);
        this.state({
                collapsed,
                mode:collapsed ? 'vertical': 'inline',
            }

        );
    }

    onMenuClick = (e)=>{
        console.log(e);

    }

    onOpenChangeHander=(e)=>{
        console.log(e);
    }

    render(){
        return(
            <Layout style={{ padding: '24px 0', background: '#fff', height:"800px" }}>
        <Sider width={200} style={{ background: '#fff' }}>
            <div>
            </div>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                onClick={this.onMenuClick}
                >
                <SubMenu key="Tool" title={<span><Icon type="user" />实用工具</span>}>
                    <Menu.Item key="1">接口生成/调试</Menu.Item>

                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Input placeholder="Basic usage"/>
                    <Demo style={{width: '80%'}}/>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <CenterTabs  refs="centerTabs"/>
                </Content>
            </Layout>
        )

    }


}

class CenterTabs extends React.Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1', closable: false },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render() {
        return (
            <Tabs
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
                >
                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
            </Tabs>
        );
    }
}


class Demo extends React.Component {
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }
    render() {
        return (
            <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
                >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }

    loaderTree(){
        return null;
    }
}

export default LayoutInterface;