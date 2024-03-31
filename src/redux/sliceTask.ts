import { createSlice } from "@reduxjs/toolkit";
import { Task } from "./types";
import { addTask, deleteTask, editTask, filterTasks, getOneTask, getTasks,  } from "./actions";
import { handleAddTasksFulfilled, handleDeleteTasksFulfilled, handleEditTasksFulfilled, handleFilterTasksFulfilled, handleGetOneTaskFulfilled, handlePending, handleRejected,  handleTasksFulfilled } from "./handlers";


export type TaskState = {
    items: Task[];
    oneTask: Task[];
    isLoading: boolean;
    error: string | null;
  };
  

  const initialState: TaskState = {
    items: [],
    oneTask: [],
    isLoading: false,
    error: null
};

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
        .addCase(`${getTasks.fulfilled}`, handleTasksFulfilled)
        .addCase(`${addTask.fulfilled}`, handleAddTasksFulfilled)
        .addCase(`${getOneTask.fulfilled}`, handleGetOneTaskFulfilled)
        .addCase(`${deleteTask.fulfilled}`, handleDeleteTasksFulfilled)
        .addCase(`${editTask.fulfilled}`, handleEditTasksFulfilled)
        .addCase(`${filterTasks.fulfilled}`, handleFilterTasksFulfilled)

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