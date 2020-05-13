import React, {Component} from "react";
import classes from "./Topbar.module.css";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import TopRight from "../TopRight/TopRight";
import Employees from "../Employees/Employees";

const {Header} = Layout;

class Topbar extends Component {

    render() {
        return (
            <div className={classes.Topbar}>
                <Header>
                    <Employees/>
                    <TopRight/>
                </Header>
            </div>
        )
    }

}

export default Topbar
