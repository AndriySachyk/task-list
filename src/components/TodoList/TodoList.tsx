import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem/TodoItem"
import { List } from "./TodoList-style"
import { selectTask } from "../../redux/selectors"

export const TodoList = () => {

const tasks = useSelector(selectTask)


console.log('tasks', tasks)


  return (
        <List>
            <TodoItem/>
        </List>
  )
}
