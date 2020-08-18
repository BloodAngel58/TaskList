import * as React from "react";
import * as Router from "react-router-dom";
import "./styles/AppDefaultLayoutNavMenuItem.css"

interface AppDefaultLayoutNavMenuItemProps {
    routeTo: string;
    itemText: string;
}

// шаблон элемента навигационного меню
const AppDefaultLayoutNavMenuItem: React.FC<AppDefaultLayoutNavMenuItemProps> = (props) => {
    const {routeTo, itemText} = props;
    return (
        <div className="AppDefaultLayoutNavMenuItem">
            <Router.Link to={routeTo} replace>
                {itemText || "-"}
            </Router.Link>
        </div>
    )
};
export default AppDefaultLayoutNavMenuItem;
