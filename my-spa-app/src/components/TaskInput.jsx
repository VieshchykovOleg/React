import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taskListState } from "../recoil/atoms";

const TaskInput = () => {
    const [task, setTask] = useState("");
    const setTaskList = useSetRecoilState(taskListState);

    const addTask = () => {
        if (task.trim()) {
            setTaskList((oldTasks) => [
                ...oldTasks,
                { id: Date.now(), text: task, isCompleted: false },
            ]);
            setTask(""); // Очистити поле вводу
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
