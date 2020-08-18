import * as React from "react";
import AppView from "./AppView/AppView";

// корневой компонент Приложения
// Будет загружать и хранить данные всего приложения (например, информация о текущем пользователе)
const App: React.FC = () => {
    return (
        <AppView/>
    )
};

export default App;
