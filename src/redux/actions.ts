
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from './types';
import { getAllTasks, addTask as addTaskAPI, deleteTask as deleteTaskAPI, editTask as editTaskAPI } from '../api/api';


export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
      try {
        const {data} = await getAllTasks();
        if (data.length > 0 ) Notiflix.Notify.info(`Hey, you have such a number of tasks ${data.length}`); 
        return data; 
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
         Notiflix.Notify.failure("Failed to fetch tasks.");
        throw error   
    }
}
);


export const addTask = createAsyncThunk('tasks/addTask', async (task: Task) => {
    try {
        const {data} = await addTaskAPI(task); 
        Notiflix.Notify.success('Creation task completed successfully');
        return data; 
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
         Notiflix.Notify.failure("Failed to create task.");
        
        throw error   
    }
}
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: number) => {
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


export const editTask = createAsyncThunk('tasks/editTask',async ({ taskId, updatedTask }: { taskId: number, updatedTask: Task }): Promise<Task> => {
    try {
        await editTaskAPI(taskId, updatedTask); 

        Notiflix.Notify.success('Task editing was completed successfully');
        
        return   updatedTask;
        
    } catch (error) {
        console.error('Сталася помилка під час отримання даних:', error);
        Notiflix.Notify.failure("Task editing failed.");
        throw error
    }
  }
);


