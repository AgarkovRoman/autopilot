import React, {Component} from "react";
import classes from './TopRight.module.css';
import { QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';
import UserProfile from '../UserProfile/UserProfile'

const iconClass = {fontSize: '18px', marginRight: "16px"}

const TopRight = props => {
    return (
        <div className={classes.TopRight}>
            <QuestionCircleOutlined style={iconClass}/>
            <BellOutlined style={iconClass}/>
            <UserProfile/>
        </div>
    )
}

export default TopRight