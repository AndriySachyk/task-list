// import React from 'react'
import { ClearList } from "../ClearList/ClearList"
import { Header } from "../Header/Header"
import { TodoList } from "../TodoList/TodoList"
import { Container, MainPage } from "./Wrapper-style"

export const Wrapper = () => {
  return (
    <MainPage>
      <Header/>
      <Container>

        <ClearList/>
        <TodoList/>
      </Container>
    </MainPage>
  )
}
