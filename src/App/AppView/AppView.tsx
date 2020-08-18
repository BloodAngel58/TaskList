import * as React from "react";
import AppDefaultLayout from "./AppDefaultLayout/AppDefaultLayout";

// Точка расширения, на случай нескольких лейаутов приложения
const AppView: React.FC = () => {
    return (
        <AppDefaultLayout/>
    )
};

export default AppView;
