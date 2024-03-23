import { RootState } from "./store";

export const selectTask = (state: RootState)=> state.task.items;
export const selectIsLoading = (state: RootState)=> state.task.isLoading
export const selectError = (state: RootState)=> state.task.error;
export const selectTheme = (state: RootState)=> state.task.theme;


