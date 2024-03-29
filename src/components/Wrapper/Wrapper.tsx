
import { useDispatch, useSelector } from "react-redux"
import { useTheme } from "../../Provider/ThemeProvider"
import { ClearList } from "../ClearList/ClearList"
import { Header } from "../Header/Header"
import { TodoList } from "../TodoList/TodoList"
import { Container, MainPage } from "./Wrapper-style"
import { useEffect } from "react"
import { getTasks } from "../../redux/actions"
import { selectIsLoading, selectTask } from "../../redux/selectors"
import { Loader } from "../Loader/Loader"

// import {useEffect } from 'react'



export const Wrapper = () => {
  const dispatch = useDispatch();
  
  const tasks = useSelector(selectTask)
  
  const isLoading = useSelector(selectIsLoading)


  useEffect(()=>{
      dispatch(getTasks() as any)
  },[dispatch])


  const { darkMode } = useTheme();


  return (
    <MainPage className={darkMode? 'withe': 'black'} >
      <Header/>
      <Container>
        {isLoading && <Loader/>}
       {tasks.length > 0  ? !isLoading && <TodoList/> : !isLoading && <ClearList/>}
      </Container>
    </MainPage>
  )
}
