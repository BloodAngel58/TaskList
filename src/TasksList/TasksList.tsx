import * as React from "react";
import {Task} from "./index";
import {stabTaskArray} from "./stabTaskArray";
import {TaskListContext} from "./TaskListContext";
import TasksListView from "./TasksListView/TasksListView";
import * as _ from "lodash";

interface TasksListProps {
};

interface TasksListState {
    tasks: Task[];
}

// корневой компонент Модуля списка задач
export class TasksList extends React.Component<TasksListProps, TasksListState> {
    constructor(props) {
        super(props);
        // Init state
        this.state = {tasks: []};
    }

    /*LIFECYCLE METHODS*/
        componentDidMount() {
            // имитация получения данных
            this.setState({tasks: stabTaskArray})
        }

    private readonly saveTask = (updateTask: Task) => {
        let result = _.cloneDeep(this.state.tasks);
            const taskIndex = result.findIndex((item) => item.id === updateTask.id);
            if (taskIndex !== -1) {
                result[taskIndex] = updateTask;
                this.setState({tasks: result})
            } else {
                console.error(`Не найдена задача с Id ${updateTask.id}`);
            }
    }

    private readonly addNewTask = () => {
        let result = _.cloneDeep(this.state.tasks);
        // новая задач - отрицательный id (соглашение)
        result.unshift({id: `-${result.length}` , taskText: "", isChecked: false});
        this.setState({tasks: result});
    }

    private readonly deleteTask = (taskId: string) => {
        let result = _.cloneDeep(this.state.tasks);
        result = result.filter((item) => item.id !== taskId);
        this.setState({tasks: result});
    }

    render (){
        return (
        <TaskListContext.Provider
            value={{
            tasks: this.state.tasks,
            saveTask: this.saveTask,
            deleteTask: this.deleteTask,
            addNewTask: this.addNewTask,
            }}
        >
           <TasksListView/>
         </TaskListContext.Provider>
        )
    }
};
