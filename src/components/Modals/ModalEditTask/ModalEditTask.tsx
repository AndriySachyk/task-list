import React, {  useCallback, useEffect, useState } from 'react'
import { BkgModal, BoxLableInputs, BtnCloseModal, BtnSubmit, ContainerForm, IconClose, InputStatus, Inputs, LableInputs, ModalContainer, Name, Radio, RasioInputs, Textarea, TitleForm } from './ModalEdilTask-style'
import { useTheme } from '../../../Provider/ThemeProvider'
import svgSymbols from "../../../icon/symbol-defs.svg"
import {  useDispatch, useSelector } from 'react-redux';

import {  selectTask } from '../../../redux/selectors';
import { editTask } from '../../../redux/actions';
import { Task } from '../../../redux/types';
import { useModalEdit } from '../../../Provider/ModalEditProviser';



interface EditTask  {
    title: string;
    id: string;
    description?: string;
    status:string
}

export const ModalEditTask = () => {

    const {idTask, modalEdit, handleCloseModal} = useModalEdit()


    const tasks = useSelector(selectTask)
    const taskEdit = tasks.filter((task)=>{return task.id === idTask})
    const [formData, setFormData] = useState<EditTask>(taskEdit[0]);
    const {darkMode} = useTheme()
    const dispatch = useDispatch()
    
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = (e:any)=>{
        e.preventDefault()
        const newTask: Task = {
            id: idTask,
            title: formData.title,
            description: formData.description,
            status: formData.status
          };
        dispatch(editTask({ taskId: idTask, updatedTask: newTask }) as any)
      console.log('submit', newTask)
      handleCloseModalEdit() 
    }
     

const handleCloseModalEdit = useCallback(() => {
    handleCloseModal();
}, [handleCloseModal]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            handleCloseModalEdit();
          }
        };
        
   
        if (modalEdit) {
          document.addEventListener('keydown', handleKeyPress);
        }
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };

      }, [modalEdit, handleCloseModalEdit]);

      

  return (
    <>
    <BkgModal onClick={handleCloseModalEdit}></BkgModal>
        <ModalContainer className={darkMode?'withe':'black'}>
            <BtnCloseModal className={darkMode?'withe':'black'} type="button" onClick={handleCloseModalEdit} >
                <IconClose className="icon-close">
                    <use href={`${svgSymbols}#icon-cross`}></use>
                </IconClose>      
            </BtnCloseModal>
            <TitleForm>Edit Task</TitleForm>
            <ContainerForm onSubmit={handleSubmit}>
                <BoxLableInputs>
                    <LableInputs htmlFor="title">Title:</LableInputs>
                    <Inputs
                        required 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Enter a title"
                        onChange={handleChange}
                        value={formData.title}
                        />
                </BoxLableInputs>
                <BoxLableInputs>
                <LableInputs htmlFor="description">Description:</LableInputs>
                <Textarea 
                    id="description" 
                    rows={4} 
                    name="description"  
                    placeholder="Enter a Description"
                    onChange={handleChange}
                    value={formData.description}
                    ></Textarea>
                </BoxLableInputs>
                <BoxLableInputs>

                    <LableInputs htmlFor="status">Status:</LableInputs>
                    <RasioInputs className={darkMode?'withe':'black'}>
                    <Radio className="radio">
                        <InputStatus 
                            type="radio" 
                            name="status" 
                            onChange={handleChange}
                            checked={formData.status === 'Pending'} 
                            value={"Pending"}                           
                            />
                        <Name className={darkMode?'withe':'black'}>Pending</Name>
                    </Radio>
                    <Radio className="radio">
                        <InputStatus 
                            type="radio" 
                            name="status"
                            onChange={handleChange}
                            checked={formData.status === 'In process'}  
                            value={"In process"}                          
                            />
                        <Name className={darkMode?'withe':'black'}>In Process</Name>
                    </Radio>
                    <Radio className="radio">
                        <InputStatus 
                            type="radio" 
                            name="status"
                            onChange={handleChange}
                            checked={formData.status === 'Executed'}  
                            value={"Executed"}                          
                            />
                        <Name className={darkMode?'withe':'black'}>Executed</Name>
                    </Radio>
                        
                    </RasioInputs>
                </BoxLableInputs>
           
                <BtnSubmit className={darkMode?'withe':'black'} type="submit">Submit</BtnSubmit>
            </ContainerForm>
        </ModalContainer>
    </>
  )
}
