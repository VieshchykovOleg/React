import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskListState, taskFilterState } from "../recoil/atoms";

const TaskList = () => {
    const taskList = useRecoilValue(taskListState);
    const filter = useRecoilValue(taskFilterState);
    const setTaskList = useSetRecoilState(taskListState);

    const filteredTasks = taskList.filter((task) => {
        if (filter === "completed") return task.isCompleted;
        if (filter === "incomplete") return !task.isCompleted;
        return true;
    });

    const toggleTaskStatus = (id) => {
        setTaskList((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTaskList((tasks) => tasks.filter((task) => task.id !== id));
    };

    return (
        <ul>
            {filteredTasks.map((task) => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => toggleTaskStatus(task.id)}
                    />
                    {task.text}
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
