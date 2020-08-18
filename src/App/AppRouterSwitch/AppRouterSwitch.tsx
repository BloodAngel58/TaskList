import * as React from "react";
import * as Router from "react-router-dom";
import { TasksList } from "../../TasksList/TasksList";

// маппер роутов на модули
const AppRouterSwitch: React.FC = () => {
    return (
        <Router.Switch>
            <Router.Route
                path={"/taskList"}
                component={() => <TasksList/>}
            />
        </Router.Switch>
    );
};

export default AppRouterSwitch;
