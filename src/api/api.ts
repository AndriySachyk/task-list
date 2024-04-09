
import axios from 'axios';
import { Task } from '../redux/types';


axios.defaults.baseURL = 'http://localhost:5555/api/'

export const getAllTasks = async (): Promise<{ data: Task[] }> => {
  const {data} = await axios.get('tasks');
  return data.result.tasks;
};

export const getOneTask = async (taskId:string): Promise<{ data: Task }> =>{
  const {data} = await axios.get(`tasks/${taskId}`);
  return data.result.tasks;
}


export const addTask = async (task: Task): Promise<{ data: Task }> => {
  const data = await axios.post('tasks', task);
  return data;
};



export const deleteTask = async (taskId: string): Promise<void> => {
  await axios.delete(`tasks/${taskId}`);
};



export const editTask = async (taskId: string, updatedTask: Task): Promise<{data: Task}> => {
  const {data} = await axios.put(`tasks/${taskId}`, updatedTask);
  console.log('dataAPI', data)
  return data.result; //
};


export const filterTasks = async (tasksStatus: string): Promise<{data: Task[]}> => {
  const {data} = await axios.get(`tasks/status/${tasksStatus}`);
  return data.result.tasks;
}
