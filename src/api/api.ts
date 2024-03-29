
import axios from 'axios';
import { Task } from '../redux/types';


axios.defaults.baseURL = 'http://localhost:5555/api/'

export const getAllTasks = async (): Promise<{ data: Task[] }> => {
  const {data} = await axios.get('tasks');
  return data.result.tasks;
};



export const addTask = async (task: Task): Promise<{ data: Task }> => {
  const data = await axios.post('tasks', task);
  return data;
};



export const deleteTask = async (taskId: string): Promise<void> => {
  await axios.delete(`tasks/${taskId}`);
};



export const editTask = async (taskId: number, updatedTask: Task): Promise<void> => {
  await axios.put(`tasks/${taskId}`, updatedTask);
};

