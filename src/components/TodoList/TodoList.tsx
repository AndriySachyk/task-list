import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem/TodoItem"
import { ContainerListBtn, List, NumberOfTasks } from "./TodoList-style"
import { selectTask } from "../../redux/selectors"
import { useTheme } from "../../Provider/ThemeProvider"
import { ButtonAddNewTasks } from "../Button/ButtonAddNewTasks"

export const TodoList = () => {

const tasks = useSelector(selectTask)

const { darkMode } = useTheme();


// console.log('tasks', tasks.length)


  return (
    <>
      <ContainerListBtn>
        <NumberOfTasks className={darkMode? 'withe':'black'}>{`You have: ${tasks.length} tasks`}</NumberOfTasks>
          <List className={darkMode? 'withe':'black'}>
              <TodoItem/>
          </List>
        <ButtonAddNewTasks/>
      </ContainerListBtn>
    </>
  )
}
