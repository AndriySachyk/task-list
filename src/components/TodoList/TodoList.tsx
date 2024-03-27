import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem/TodoItem"
import { List, NumberOfTasks } from "./TodoList-style"
import { selectTask } from "../../redux/selectors"
import { useTheme } from "../../Provider/ThemeProvider"

export const TodoList = () => {

const tasks = useSelector(selectTask)

const { darkMode } = useTheme();



console.log('tasks', tasks)


  return (
    <>
      <NumberOfTasks className={darkMode? 'withe':'black'}>You have: 4 tasks</NumberOfTasks>
        <List className={darkMode? 'withe':'black'}>
            <TodoItem/>
        </List>
    </>
  )
}
