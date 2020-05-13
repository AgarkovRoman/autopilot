import React from 'react';
import './App.css';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import Topbar from "./components/Topbar/Topbar";
import LeftMenu from './components/LeftMenu/LeftMenu';

const { Sider, Content } = Layout;

function App() {
  return (
    <div>
        <Layout>
            <Sider>
                <LeftMenu/>
            </Sider>
            <Layout>
                <Topbar></Topbar>
                <Content>Content</Content>
            </Layout>
        </Layout>
    </div>

  );
}

export default App;
