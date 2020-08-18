import * as React from "react";
import "./styles/TasksListTableViewItemReview.css";
import {Task} from "../../../../index";

interface TasksListTableViewItemReviewProps {
    item?: Task;
    toggleEdit?: () => void;
    deleteTask?: (taskId: string) => void;
}

const TasksListTableViewItemReview: React.FC<TasksListTableViewItemReviewProps> = (props) => {
    const {item, toggleEdit, deleteTask} = props;
    return (
        <div className="TasksListTableViewItemReview">
            <div className="TasksListTableViewItemReview-checkedSlot">
                <input type="checkbox" disabled={true}/>
                <span className={`${item?.isChecked ? item.isChecked ? "TasksListTableViewItemReview-taskStatus_active" : "TasksListTableViewItemReview-taskStatus_notActive" : "TasksListTableViewItemReview-taskStatus_notActive" }`}>
                    {item?.isChecked ? item.isChecked ? "Выполнена" : "Не выполнена" : "Не выполнена" }
                </span>
            </div>
            <div className="TasksListTableViewItemReview-textSlot">
                <span className="TasksListTableViewItemReview-textSlot_label">{item?.taskText}</span>
            </div>
            <div className="TasksListTableViewItemReview-buttonsSlot">
                <button onClick={toggleEdit}>{"Редактировать"}</button>
                <button onClick={() => deleteTask(item.id)}>{"Удалить"}</button>
            </div>
        </div>
    )
};

TasksListTableViewItemReview.displayName = "TasksListTableViewItemReview";

export default TasksListTableViewItemReview;
