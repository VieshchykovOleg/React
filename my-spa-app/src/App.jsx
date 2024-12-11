import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskInput />
            <TaskFilter />
            <TaskList />
        </div>
    );
};

export default App;
