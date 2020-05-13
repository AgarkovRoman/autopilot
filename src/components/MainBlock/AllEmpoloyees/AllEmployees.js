import React from "react";
import classes from './AllEmployees.module.css'
import {Table, Space, Input, Button, Avatar, Checkbox} from 'antd';
import TableTop from '../TableTop/TableTop'

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        name: 'Павел Павлов',
        access: 'Владелец',
    },
    {
        key: '2',
        name: 'Антон Гжищенко',
        access: 'Гость',
    },
    {
        key: '3',
        name: 'Анна Коваленко',
        access: 'Администратор',
    },
];

class AllEmployees extends React.Component {
    render() {
        return (
            <div className={classes.AllEmployees}>
                <TableTop/>
                <Table dataSource={data}>
                    <Column title="Сотрудники" dataIndex="name" key="name" />
                    <Column title="Доступ" dataIndex="access" key="access" />
                    <Column
                        title="Действие"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <a>Удалить</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        )
    }
}

export default AllEmployees