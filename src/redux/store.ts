
import {  combineReducers } from 'redux';
import { taskReducer } from './sliceTask';
import { configureStore } from '@reduxjs/toolkit';



export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  task: taskReducer,
});


export const store = configureStore({
    reducer: rootReducer,
  });