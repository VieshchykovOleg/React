import React from "react";
import { useRecoilState } from "recoil";
import { taskFilterState } from "../recoil/atoms";

const TaskFilter = () => {
    const [filter, setFilter] = useRecoilState(taskFilterState);

    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>
    );
};

export default TaskFilter;
