import { BoxButtons, BoxStatusTask, BoxStatusTitleBtn, BtnDelete, BtnEditing, DescriptionTask, IconDelete, ItemTask, StatusTask, StatusTaskValue, TitleTask } from "./TodoItem-style"
import svgIcon from "../../../icon/symbol-defs.svg"
import { useTheme } from "../../../Provider/ThemeProvider"
import { selectTask } from "../../../redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../../../redux/actions"
// import { useStatusFilter } from "../../../Provider/StatusProvider"
import { useEffect, useState } from "react"


type Task = {
    title: string;
    id: string;
    description?: string;
    status: string;
}

export const TodoItem = () => {
    const [filterTasks, setFilterTasks] = useState<Array<Task>>([])
    const tasks = useSelector(selectTask)
    const {darkMode} = useTheme()
    // const {statusFilter} = useStatusFilter()    
    const dispatch = useDispatch()
    const status = localStorage.getItem("selectedOption")
    
    const handleDeleteTask = (id: string)=>{
        const idDeleteTask = id
        dispatch(deleteTask(idDeleteTask) as any)
    }

useEffect(()=>{
    const handleFilterStatus = () => {
      console.log('status', status)
        if (status === "All") {
           return setFilterTasks(tasks)
        }
        const newList = tasks.filter((task)=> { return task.status === status})
         setFilterTasks(newList)
        console.log("HElllo", newList)
        
        // console.log(tasks)


    }
    handleFilterStatus();

    console.log('filterTasks', filterTasks)


},[status, setFilterTasks])



  return (
    <>
    { filterTasks && filterTasks.map((task)=>{
        return(<ItemTask className={darkMode?'withe':'black'} key={task.id}> 
        <BoxStatusTitleBtn>
            <BoxStatusTask>
                <StatusTask> Status: </StatusTask> 
                <StatusTaskValue> {task.status} </StatusTaskValue>
               
                
            </BoxStatusTask>
            <TitleTask>{task.title}</TitleTask>
            <BoxButtons>
                <BtnDelete className={darkMode?'withe':'black'} type="button" onClick={()=>handleDeleteTask(task.id)}>
                    <IconDelete className={`icon-delete ${darkMode?'withe':'black'}`}>
                        <use href={`${svgIcon}#icon-bin`}></use>
                    </IconDelete> 
                </BtnDelete>
                <BtnEditing className={darkMode?'withe':'black'} type="button">
                    <IconDelete className={`icon-editing ${darkMode?'withe':'black'}`}>
                        <use href={`${svgIcon}#icon-editing`}></use>
                    </IconDelete> 
                </BtnEditing>
            </BoxButtons>
        </BoxStatusTitleBtn>
        <DescriptionTask className={darkMode?'withe':'black'} >{task.description === ""? 'Description...':task.description}</DescriptionTask>
    </ItemTask>)
        
    })

    }
    
    
    </>
  )
}
