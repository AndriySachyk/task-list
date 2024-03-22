import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem/TodoItem"
import { List, NumberOfTasks } from "./TodoList-style"
import { selectTask } from "../../redux/selectors"

export const TodoList = () => {

const tasks = useSelector(selectTask)


console.log('tasks', tasks)


  return (
    <>
      <NumberOfTasks>You have: 4 tasks</NumberOfTasks>
        <List>
            <TodoItem/>
        </List>
    </>
  )
}
