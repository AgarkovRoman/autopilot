import React, {Component} from "react";
import classes from './Employees.module.css'
import { MenuFoldOutlined } from '@ant-design/icons';


const Employees = props => {
    return (
        <div className={classes.Employees}>
            <MenuFoldOutlined style={{ fontSize: '18px', marginRight: '30px' }}/>
            <h3>Сотрудники</h3>
        </div>
    )
}

export default Employees