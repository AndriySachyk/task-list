
// Визначення типів дій (actions)
export const ADD_TASK = 'ADD_TASK';
export const EDITING_TASK = 'EDITING_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASKS = 'GET_TASKS';
export const SWITCH_THEME = 'SWITCH_THEME';

// Визначення типу об'єкта todo
export interface Task {
  id: number;
  title: string;
  description: string;
  status:string;
}

// Визначення типу стану
export interface TodoState {
  todos: Task[];
}
