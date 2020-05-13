import React from 'react';
import './App.css';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import Topbar from "./components/Top/Topbar/Topbar";
import LeftMenu from './components/LeftMenu/LeftMenu';
import AllEmployees from "./components/MainBlock/AllEmpoloyees/AllEmployees";

const { Sider, Content } = Layout;

function App() {
  return (
    <div>
        <Layout>
            <Sider>
                <LeftMenu/>
            </Sider>
            <Layout>
                <Topbar/>
                <Content>
                    <AllEmployees/>
                </Content>
            </Layout>
        </Layout>
    </div>

  );
}

export default App;
