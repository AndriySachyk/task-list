import {BoxTitleIcon, ButtonAddTask, ContainerTitleClear, IconCheckmark, IconPencil, TitleClearList } from "./ClearList-style"

import svgSymbols from '../../icon/symbol-defs.svg';
import { useTheme } from "../../Provider/ThemeProvider";

export const ClearList = () => {

  const {darkMode} = useTheme()


  return (
    <ContainerTitleClear>
      <BoxTitleIcon>
        
        <TitleClearList className={darkMode?'withe':'black'}>Ваш список порожній, ви можете створити свій таск нижче</TitleClearList> 
        <IconPencil className={darkMode?'withe':'black'}>
            <use href={`${svgSymbols}#icon-arrow-down2`}></use>
        </IconPencil>
      </BoxTitleIcon>
    <ButtonAddTask className={darkMode?'withe':'black'} type="button" >
      <IconCheckmark className='icon-add'>
        <use href={`${svgSymbols}#icon-plus`}></use>
      </IconCheckmark > Add a new task  </ButtonAddTask>
    </ContainerTitleClear>
  

  )
}
