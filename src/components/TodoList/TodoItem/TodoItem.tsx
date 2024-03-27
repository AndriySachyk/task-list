import { BoxButtons, BoxStatusTitleBtn, BtnDelete, BtnEditing, DescriptionTask, IconDelete, ItemTask, StatusTask, TitleTask } from "./TodoItem-style"
import svgIcon from "../../../icon/symbol-defs.svg"
import { useTheme } from "../../../Provider/ThemeProvider"


export const TodoItem = () => {

    const {darkMode} = useTheme()

  return (
    <>
    <ItemTask className={darkMode?'withe':'black'}> 
        <BoxStatusTitleBtn>
            <StatusTask> Status: Pending</StatusTask>
            <TitleTask>Title</TitleTask>
            <BoxButtons>
                <BtnDelete className={darkMode?'withe':'black'} type="button">
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
        <DescriptionTask className={darkMode?'withe':'black'}> sfddfASDASDsdfsdfsdfsdfsdf</DescriptionTask>
    </ItemTask>
    
    
    </>
  )
}
