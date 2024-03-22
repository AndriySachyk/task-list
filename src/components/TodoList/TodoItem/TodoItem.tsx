import { BoxButtons, BoxStatusTitleBtn, BtnDelete, BtnEditing, DescriptionTask, IconDelete, ItemTask, StatusTask, TitleTask } from "./TodoItem-style"

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
                        <use href="./svg/symbol-defs.svg#icon-bin"></use>
                    </IconDelete> 
                </BtnDelete>
                <BtnEditing  type="button">
                    <IconDelete className='icon-editing'>
                        <use href="./svg/symbol-defs.svg#icon-editing"></use>
                    </IconDelete> 
                </BtnEditing>
            </BoxButtons>
        </BoxStatusTitleBtn>
        <DescriptionTask> sfddfASDASDsdfsdfsdfsdfsdf </DescriptionTask>
    </ItemTask>
    
    </>
  )
}
