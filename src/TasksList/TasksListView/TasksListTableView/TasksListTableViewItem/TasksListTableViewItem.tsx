import * as React from "react";
import {Task} from "../../../index";
import "./styles/TasksListTableViewItem.css";
import TasksListTableViewItemPerform from "./TasksListTableViewItemPerform/TasksListTableViewItemPerform";
import TasksListTableViewItemReview from "./TasksListTableViewItemReview/TasksListTableViewItemReview";
import * as _ from "lodash";

interface TasksListTableViewItemProps {
    item: Task;
    saveTask?: (updateTask: Task) => void;
    deleteTask?: (taskId: string) => void;
}

export interface paramsState {
    taskText?: string;
    isChecked?: boolean;
    item?: Task;
}

interface TasksListTableViewItemState extends paramsState {
    isPerform?: boolean;
}

export class TasksListTableViewItem extends React.Component<TasksListTableViewItemProps, TasksListTableViewItemState> {
    constructor(props) {
        super(props);
        // init state
        this.state = {isPerform: false};
    };

    componentDidMount() {
        // итем перекладываем в state чтобы не вызывать лишний перерендер при редактировании
        const result = _.cloneDeep(this.props.item);
        this.setState({item: result})
    }

    private readonly toggleEdit = () => {
        this.setState({isPerform: !this.state.isPerform});
    };

    private readonly cancelChanges = () => {
        // возвращаемся к исходному состоянию (отменяем не сохраненные правки)
        const result = _.cloneDeep(this.props.item);
        this.setState({item: result, isPerform: false});
    };

    private readonly setParamItem = (paramName: string, paramValue: any) => {
        const newItem = _.cloneDeep(this.state.item);
        newItem[paramName] = paramValue;
        this.setState({item: newItem});
    };

    private readonly saveNewItem = () => {
        this.setState({isPerform: false});
        this.props.saveTask(this.state.item);
    };

    render() {
        return (
            <div className="TasksListTableViewItem">
                {
                    // Проверка на новый итем (новый итем сразу на Perform, у нового итема отрицательный числовой Id)
                    this.state.isPerform || Number(this.state.item?.id) < 0 ?
                        <TasksListTableViewItemPerform
                            cancelChanges={this.cancelChanges}
                            setParamItem={this.setParamItem}
                            item={this.state.item}
                            deleteTask={this.props.deleteTask}
                            saveNewItem={this.saveNewItem}
                        />
                        :
                        <TasksListTableViewItemReview
                            deleteTask={this.props.deleteTask}
                            toggleEdit={this.toggleEdit}
                            item={this.state.item}
                        />
                }
            </div>
        )
    }
}
