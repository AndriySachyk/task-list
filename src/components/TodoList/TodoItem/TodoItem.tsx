import { BoxButtons, BoxStatusTitleBtn, BtnDelete, BtnEditing, DescriptionTask, IconDelete, ItemTask, StatusTask, TitleTask } from "./TodoItem-style"
import svgIcon from "../../../icon/symbol-defs.svg"


export const TodoItem = () => {
  return (
    <>
    <ItemTask>
        <BoxStatusTitleBtn>
            <StatusTask> Status: Pending</StatusTask>
            <TitleTask>Title</TitleTask>
            <BoxButtons>
                <BtnDelete  type="button">
                    <IconDelete className='icon-delete'>
                        <use href={`${svgIcon}#icon-bin`}></use>
                    </IconDelete> 
                </BtnDelete>
                <BtnEditing  type="button">
                    <IconDelete className='icon-editing'>
                        <use href={`${svgIcon}#icon-editing`}></use>
                    </IconDelete> 
                </BtnEditing>
            </BoxButtons>
        </BoxStatusTitleBtn>
        <DescriptionTask> sfddfASDASDsdfsdfsdfsdfsdf</DescriptionTask>
    </ItemTask>
    
    </>
  )
}
