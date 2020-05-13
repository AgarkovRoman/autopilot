import React from "react";
import classes from './UserProfile.module.css';
import { Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const UserProfile = props => {
    return (
        <div className={classes.UserProfile}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <h3>Борис Годунов</h3>
            <DownOutlined style={{fontSize: '10px'}}/>
        </div>
    )
}

export default UserProfile