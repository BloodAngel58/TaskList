import * as React from "react";
import "./styles/AppDefaultLayout.css";
import AppDefaultLayoutHeader from "./AppDefaultLayoutHeader/AppDefaultLayoutHeader";
import AppDefaultLayoutNavMenu from "./AppDefaultLayoutNavMenu/AppDefaultLayoutNavMenu";
import AppDefaultLayoutContent from "./AppDefaultLayoutContent/AppDefaultLayoutContent";

// дефолтный шаблон приложения
const AppDefaultLayout: React.FC = (props) => {
    return (
        <div className="AppDefaultLayout">
            <div className="AppDefaultLayout-headerSlot">
                <AppDefaultLayoutHeader/>
            </div>
            <div className="AppDefaultLayout-navMenuSlot">
                <AppDefaultLayoutNavMenu/>
            </div>
            <div className="AppDefaultLayout-contentSlot">
                <AppDefaultLayoutContent/>
            </div>
        </div>
    )
};

export default AppDefaultLayout;
