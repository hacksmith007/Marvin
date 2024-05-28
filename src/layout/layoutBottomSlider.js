import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import {
  DesktopOutlined,
  PoweroffOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Welcome from '../pages/Welcome';
import Settings from '../pages/Settings';

import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <Link to="/home"><HomeOutlined /></Link> ),
  getItem('Dashboard', '2', <Link to="/dashboard"><DesktopOutlined /> </Link>),
  getItem('Account', 'sub1', <UserOutlined />, [
    getItem('Profile', '3',<Link to="/profile"><UserOutlined /></Link>),
    getItem('Settings', '4', <Link to="/profile/settings"><SettingOutlined /></Link>),
    getItem('Logout', '5', <PoweroffOutlined /> ),
  ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];

const LayoutSliderBottom = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
            <Route path="/" element={<Welcome />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/settings" element={<Settings />} />
            </Routes>
            
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Billion Dollar Idea ©{new Date().getFullYear()} Created by Rahul R.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutSliderBottom;