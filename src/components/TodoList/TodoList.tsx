import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem/TodoItem"
import { ContainerListBtn, List, NumberOfTasks } from "./TodoList-style"
import { selectTask } from "../../redux/selectors"
import { useTheme } from "../../Provider/ThemeProvider"
import { ButtonAddNewTasks } from "../Button/ButtonAddNewTasks"
import { useModalEdit } from "../../Provider/ModalEditProviser"
import { ModalEditTask } from "../Modals/ModalEditTask/ModalEditTask"

export const TodoList = () => {

const tasks = useSelector(selectTask)

const { darkMode } = useTheme();
const { modalEdit} = useModalEdit()


  return (
    <>
      {modalEdit && <ModalEditTask />}
      <ContainerListBtn >
        <NumberOfTasks className={darkMode? 'withe':'black'}>{`You have: ${tasks.length} tasks`}</NumberOfTasks>
          <List className={darkMode? 'withe':'black'}>
              <TodoItem/>
          </List>
        <ButtonAddNewTasks/>
      </ContainerListBtn>
    </>
  )
}
