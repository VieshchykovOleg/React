import { atom } from "recoil";
export const taskListState = atom({
    key: "taskListState",
    default: [],
});
export const taskFilterState = atom({
    key: "taskFilterState",
    default: "all",
});
