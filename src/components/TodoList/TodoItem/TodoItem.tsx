import { BoxButtons, BoxStatusTask, BoxStatusTitleBtn, BtnDelete, BtnEditing, DescriptionTask, IconDelete, ItemTask, StatusTask, StatusTaskValue, TitleTask } from "./TodoItem-style"
import svgIcon from "../../../icon/symbol-defs.svg"
import { useTheme } from "../../../Provider/ThemeProvider"
import {  selectTask } from "../../../redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { deleteTask, } from "../../../redux/actions"
import { useState } from "react"
import { ModalEditTask } from "../../Modals/ModalEditTask/ModalEditTask"
// import { useStatusFilter } from "../../../Provider/StatusProvider"



export const TodoItem = () => {
    
    const [modalEditTask, setModalEditTask] = useState<boolean>(false)
    const [currentId, setCurrentId] = useState<string>('')
    
    const tasks = useSelector(selectTask)
    const {darkMode} = useTheme()
    const dispatch = useDispatch()
    
    const handleDeleteTask = (id: string)=>{
        const idDeleteTask = id
        dispatch(deleteTask(idDeleteTask) as any)
    }


    
    const handleOpenModalEdit = (id: string) => {
        console.log("currentID",id)
        setCurrentId(id)
        setModalEditTask(true); // Відкрити модальне вікно
    }



console.log('modalEditTask', modalEditTask)

  return (
    <>
    {modalEditTask && <ModalEditTask modalEditTask={modalEditTask} setModalEditTask={setModalEditTask} currentId={currentId}/>}
    { tasks && tasks.map((task)=>{
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
                <BtnEditing className={darkMode?'withe':'black'} type="button" onClick={()=>handleOpenModalEdit(task.id)}>
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
