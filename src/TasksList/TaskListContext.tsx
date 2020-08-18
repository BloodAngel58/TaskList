import * as React from "react";
import {Task} from "./index";

interface TaskListContextType {
    tasks: Task[];
    saveTask: (updateTask: Task) => void;
    deleteTask: (taskId: string) => void;
    addNewTask: () => void;
}

const context = React.createContext<TaskListContextType>(null);

export const TaskListContext = context;
