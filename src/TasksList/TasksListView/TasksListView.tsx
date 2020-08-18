import * as React from "react";
import TasksListTableView from "./TasksListTableView/TasksListTableView";

// Точка расширения на случай нескольких представлений списка задач
const TasksListView: React.FC = () => {
    return (
        <TasksListTableView/>
    )
};

export default TasksListView;
