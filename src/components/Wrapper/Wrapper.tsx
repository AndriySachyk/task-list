// import { ClearList } from "../ClearList/ClearList"

import { useSelector } from "react-redux"
import { Header } from "../Header/Header"
import { TodoList } from "../TodoList/TodoList"
import { Container, MainPage } from "./Wrapper-style"
import { selectTheme } from "../../redux/selectors"

export const Wrapper = () => {

const darkMode = useSelector(selectTheme)


  return (
    <MainPage className={darkMode? 'withe' :'dark'} >
      <Header/>
      <Container>
        {/* <ClearList/> */}
        <TodoList/>
      </Container>
    </MainPage>
  )
}
