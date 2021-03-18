import React from 'react'
import Task from './Task';
import {Component} from "react/cjs/react.production.min";

export class ListTasks extends Component{
    state = {
        taskList: []
    };


    componentDidMount() {
        fetch('https://taskplanner-cesar.azurewebsites.net/api/add-task?code=YO0kvyMA9C0gIdt0oXlXnsFs/aoFsUJsm0wnOO7rm/btQkyFSlm8oA==')
            .then(response => response.json())
            .then(data => {
                let taskList = [];
                data.forEach(function (user) {
                    taskList.push(user)

                });

                this.setState({taskList: taskList});

            });
    }

    render() {
        return (
            <div>

                <Task taskList={this.state.taskList}/>
            </div>
        );
    }
}