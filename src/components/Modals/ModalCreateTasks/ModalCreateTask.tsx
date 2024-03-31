import { useEffect, useState } from "react"
import { useTheme } from "../../../Provider/ThemeProvider"
import { BkgModal, BoxLableInputs, BtnCloseModal, BtnSubmit, ContainerForm,  IconClose,  InputStatus,  Inputs,  LableInputs, ModalContainer, Name, Radio, RasioInputs, Textarea, TitleForm } from "./ModalCreateNewTask-style"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addTask } from "../../../redux/actions"
import svgSymbols from "../../../icon/symbol-defs.svg"

interface Props {
    modal: boolean;
    setModal: (value: boolean) => void;
  }

export const ModalCreateTask: React.FC<Props> = ({ modal , setModal}) => {
const {darkMode} = useTheme()

const dispatch = useDispatch()

const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending', 
  });

const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
};


const handleSubmit = (e:any)=>{
   e.preventDefault()
   const newTask = {
       ...formData,
       id: nanoid()
    }
dispatch(addTask(newTask) as any)
}


const handleCloseModal = ()=>{
    setModal(false)
}

useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (modal) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [modal]);

return (
    <>
    <BkgModal onClick={handleCloseModal}></BkgModal>
        <ModalContainer className={darkMode?'withe':'black'}>
            <BtnCloseModal className={darkMode?'withe':'black'} type="button" onClick={handleCloseModal} >
                <IconClose className="icon-close">
                    <use href={`${svgSymbols}#icon-cross`}></use>
                </IconClose>      
            </BtnCloseModal>
            <TitleForm>Create Task</TitleForm>
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
