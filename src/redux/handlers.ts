import { TaskState } from "./sliceTask";
import { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./types";



export const handlePending =(state : TaskState)=>{
    state.isLoading = true
    state.error = ''
}


export const handleFulfilled =(state:TaskState)=>{
    state.isLoading = false
}


export const handleRejected = (state: TaskState, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
}


export const handleTasksFulfilled = (state: TaskState, action: PayloadAction<Task[] | void>)=>{
    state.items = action.payload ? action.payload : [];
    state.isLoading = false;
    state.error = null;
}


export const handleAddTasksFulfilled = (state: TaskState, action: PayloadAction<Task | void>) => {
    if (action.payload) {
        state.items.push(action.payload);
    }
    state.isLoading = false;
    state.error = null;
}


export const handleDeleteTasksFulfilled = (state: TaskState, action: PayloadAction<number | undefined>)=>{
    state.items = state.items.filter(item => item.id !== action.payload);
    state.error = null;
    state.isLoading = false;
}


export const handleEditTasksFulfilled = (state: TaskState, action: PayloadAction<Task > ) =>{
    if (action.payload) {
        const index = state.items.findIndex(task => task.id === action.payload.id);
            if(index !== -1){
                state.items[index] = action.payload;
        }
    }
    state.error = null;
    state.isLoading = false;
}

export const handleSwitchDarkMode = (state:TaskState, action:PayloadAction<boolean>)=>{
    state.theme = !action.payload
    state.error = null;
    state.isLoading = false;
}
