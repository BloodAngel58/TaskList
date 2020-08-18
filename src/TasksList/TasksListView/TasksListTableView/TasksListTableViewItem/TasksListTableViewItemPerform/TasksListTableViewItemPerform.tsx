import * as React from "react";
import "./styles/TasksListTableViewItemPerform.css";
import {Task} from "../../../../index";

interface TasksListTableViewItemPerformProps {
    item?: Task;
    setParamItem?: (paramName: string, paramValue: any) => void;
    cancelChanges?: () => void;
    deleteTask: (taskId: string) => void;
    saveNewItem: () => void;
}

const TasksListTableViewItemPerform: React.FC<TasksListTableViewItemPerformProps> = (props) => {
    const {item, setParamItem, cancelChanges, deleteTask, saveNewItem} = props;
    return (
        <div className="TasksListTableViewItemPerform">
            <div className="TasksListTableViewItemPerform-checkboxSlot">
                <input className="TasksListTableViewItemPerform-checkboxSlot_checkbox" type="checkbox" checked={item.isChecked} onClick={(e) => setParamItem("isChecked", e.currentTarget.checked)}/>
                <span className={`TasksListTableViewItemPerform-checkboxSlot_taskStatus ${item.isChecked ? "TasksListTableViewItemPerform-taskActive" : "TasksListTableViewItemPerform-taskNotActive"}`}>
                    {item.isChecked? "Выполнена" : "Не выполнена"}
                </span>
            </div>
            <div className="TasksListTableViewItemPerform-inputSlot">
                <input type={"text"} maxLength={150} value={item.taskText} onChange={(event) => setParamItem("taskText", event.currentTarget.value)}/>
            </div>
            <div className="TasksListTableViewItemPerform-buttonsSlot">
                <button onClick={saveNewItem}>{"Сохранить"}</button>
                <button onClick={cancelChanges}>{"Отменить"}</button>
                <button onClick={() => deleteTask(item.id)}>{"Удалить"}</button>
            </div>
        </div>
    )
};

TasksListTableViewItemPerform.displayName = "TasksListTableViewItemPerform";

export default TasksListTableViewItemPerform;
