import * as React from "react";
import "./styles/AppDefaultLayoutNavMenu.css";
import AppDefaultLayoutNavMenuItem from "./AppDefaultLayoutNavMenuItem/AppDefaultLayoutNavMenuItem";

const AppDefaultLayoutNavMenu: React.FC = () => {
    return (
        <nav className="AppDefaultLayoutNavMenu">
            <AppDefaultLayoutNavMenuItem
                itemText={"Задачи"}
                routeTo={"/taskList"}
            />
        </nav>
    )
};

export default AppDefaultLayoutNavMenu;
