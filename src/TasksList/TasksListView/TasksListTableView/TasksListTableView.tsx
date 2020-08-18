import * as React from "react";
import { TaskListContext } from "../../TaskListContext";
import {Task} from "../../index";
import { TasksListTableViewItem } from "./TasksListTableViewItem/TasksListTableViewItem";
import "./styles/TasksListTableView.css";

const TasksListTableView: React.FC = () => {

    const renderListTableItem = (list: Task[], saveTask, deleteTask) => {
        if (list && list.length !== 0) {
            return list.map((item) => (
                <TasksListTableViewItem key={item.id} deleteTask={deleteTask} saveTask={saveTask} item={item}/>
            ))
        }
    };

    return (
        <TaskListContext.Consumer>
            {(context) => (
                <div className="TasksListTableView">
                    <button onClick={context.addNewTask}>{"Добавить задачу"}</button>
                    {renderListTableItem(context.tasks, context.saveTask, context.deleteTask)}
                </div>
            )}
        </TaskListContext.Consumer>
    )
};

export default TasksListTableView;
