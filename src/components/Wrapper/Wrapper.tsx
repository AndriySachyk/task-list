
import { useTheme } from "../../Provider/ThemeProvider"
import { ClearList } from "../ClearList/ClearList"
import { Header } from "../Header/Header"
import { TodoList } from "../TodoList/TodoList"
import { Container, MainPage } from "./Wrapper-style"

// import {useEffect } from 'react'



export const Wrapper = () => {
  const { darkMode } = useTheme();

  return (
    <MainPage className={darkMode? 'withe': 'black'} >
      <Header/>
      <Container>
        <ClearList/>
        <TodoList/>
      </Container>
    </MainPage>
  )
}
