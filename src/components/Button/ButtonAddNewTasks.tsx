import { useTheme } from "../../Provider/ThemeProvider"
import { ButtonAddTask, IconCheckmark } from "./ButtonAddNewTasks-style"
import svgSymbols from '../../icon/symbol-defs.svg';
import { useState } from "react";
import { ModalCreateTask } from "../Modal/ModalCreateTask";



export const ButtonAddNewTasks = () => {
const [modal, setModal] = useState<boolean>(false)
const {darkMode} = useTheme()



const handleAddTasks = () =>{
    setModal(true)
}


  return (
    <>
    {modal && <ModalCreateTask modal={modal} setModal={setModal}/>}
    
        <ButtonAddTask className={darkMode?'withe':'black'} type="button" onClick={handleAddTasks} >
        <IconCheckmark className='icon-add'>
        <use href={`${svgSymbols}#icon-plus`}></use>
        </IconCheckmark > Add a new task  </ButtonAddTask>
    </>
  )
}
