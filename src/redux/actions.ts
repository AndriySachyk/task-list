
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from './types';
import { getAllTasks, addTask as addTaskAPI,getOneTask as getOneTaskAPI , deleteTask as deleteTaskAPI, editTask as editTaskAPI, filterTasks as filterTasksAPI } from '../api/api';


type DataEtid = {
    taskId: string;
    updatedTask: Task
}


export const getTasks = createAsyncThunk('/tasks', async () => {
      try {
        const data = await getAllTasks();
        return data; 
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
         Notiflix.Notify.failure("Failed to fetch tasks.");
        throw error   
    }
}
);


export const getOneTask = createAsyncThunk("tasks/getOneTask", async (taskId:string) =>{
    try {
        const data = await getOneTaskAPI(taskId); 
        return data
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
        Notiflix.Notify.failure("Task edit failed.");
        throw error
    }
})

export const addTask = createAsyncThunk('tasks/addTask', async (task: Task) => {
    try {
        const {data} = await addTaskAPI(task); 
        console.log('data', data)
        Notiflix.Notify.success('Creation task completed successfully');
        return data; 
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
         Notiflix.Notify.failure("Failed to create task.");
        
        throw error   
    }
}
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: string) => {
    try {
        await deleteTaskAPI(taskId); 
        Notiflix.Notify.success('Delete task completed successfully');
        return taskId; 
    } catch (error) { 
         Notiflix.Notify.failure("Failed to delete task.");
        throw error   
    }
}
);


export const editTask = createAsyncThunk('tasks/editTask',async ({taskId, updatedTask}: DataEtid )=>{
    try {
        const {data} = await editTaskAPI(taskId, updatedTask)
        console.log('data', data)
        return data
    } catch (error) {
        
    }
});


export const filterTasks = createAsyncThunk('tasks/filterTasks', async (taskStatus: string)=>{
    try {
        const data = await filterTasksAPI(taskStatus); 
        return data
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
        Notiflix.Notify.failure("Task filter failed.");
        throw error
    }
})