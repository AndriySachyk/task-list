import {BoxTitleIcon, ButtonAddTask, ContainerTitleClear, IconCheckmark, IconPencil, TitleClearList } from "./ClearList-style"



export const ClearList = () => {
  return (
    <ContainerTitleClear>
      <BoxTitleIcon>
        <TitleClearList>Ваш список порожній, ви можете створити свій таск нижче </TitleClearList>
        <IconPencil>
            <use href="./svg/symbol-defs.svg#icon-arrow-down2"></use>
        </IconPencil>
      </BoxTitleIcon>
    <ButtonAddTask type="button" ><IconCheckmark className='icon-add'>
      <use href="./svg/symbol-defs.svg#icon-plus"></use>
    </IconCheckmark> Add a new task  </ButtonAddTask>
    </ContainerTitleClear>
  

  )
}
