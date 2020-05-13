import React from 'react';
import classes from './LeftMenu.module.css'
import {Avatar, Menu} from 'antd';
import { TeamOutlined, SearchOutlined, BuildOutlined, HistoryOutlined, BarsOutlined, ClusterOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LeftMenu extends React.Component {
    render() {
        return (
            <div className={classes.LeftMenu}>
            <Menu
                onClick={this.handleClick}
                style={{ width: 200, background: "#fff"}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Avatar />
                            <span>Биохакинг для новичков</span>
                        </span>
                    }
                >
                </SubMenu>

                <Menu.Item key="1">
                    <HistoryOutlined />
                    Последние изменения
                </Menu.Item>
                <Menu.Item key="2">
                    <SearchOutlined />
                    Поиск
                </Menu.Item>
                <Menu.Item key="3">
                    <TeamOutlined />
                    Сотрудники
                </Menu.Item>

                <Menu.Item key="4">
                    <BuildOutlined/>
                    Наборы команд
                </Menu.Item>
                <Menu.Item key="5">
                    <BarsOutlined />
                    Списки игроков
                </Menu.Item>
                <Menu.Item key="6">
                    <ClusterOutlined />
                    Интеграции
                </Menu.Item>



            </Menu>
            </div>
        );
    }
}

export default LeftMenu