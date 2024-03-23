import { createSlice } from "@reduxjs/toolkit";
import { Task } from "./types";
import { addTask, deleteTask, editTask, getTasks, switchTheme } from "./actions";
import { handleAddTasksFulfilled, handleDeleteTasksFulfilled, handleEditTasksFulfilled, handlePending, handleRejected, handleSwitchDarkMode, handleTasksFulfilled } from "./handlers";


export type TaskState = {
    items: Task[];
    isLoading: boolean;
    theme: boolean;
    error: string | null;
  };
  
  const initialState: TaskState = {
    items: [],
    isLoading: false,
    theme: true,
    error: null
};

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
        .addCase(getTasks.fulfilled, handleTasksFulfilled)
        .addCase(addTask.fulfilled, handleAddTasksFulfilled)
        .addCase(deleteTask.fulfilled, handleDeleteTasksFulfilled)
        .addCase(editTask.fulfilled, handleEditTasksFulfilled)
        .addCase(switchTheme.fulfilled, handleSwitchDarkMode)
        .addMatcher(
            (action) => action.type.endsWith('/pending'),
            handlePending
          )
          .addMatcher(
            (action) => action.type.endsWith('/rejected'),
            handleRejected
          );
}})


export const taskReducer = taskSlice.reducer