import React from "react";
import classes from "./TableTop.module.css"
import {Button, Input} from "antd";
import {PlusOutlined, SearchOutlined} from '@ant-design/icons';


class TableTop extends React.Component {

    state = {
        menu: false
    }

    openModalHandler = () => {
        this.setState({
            // menu: true
        })
    }

    render() {
        return (
            <div className={classes.TableTop}>
            <Input style={{width: '256px', marginRight: '672px'}} size="large" placeholder="Поиск по сотрудникам" prefix={<SearchOutlined/>} />
            <Button
                size="large"
                type="primary"
                //onClick={props.onOpen}
            >
                    <PlusOutlined />
                    Добавить сотрудника
            </Button>
            </div>
        )
    }
}

export default TableTop