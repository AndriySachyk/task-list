import styled from "styled-components";


export const BkgModal = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(128, 128, 128, 0.5);
`

export const ModalContainer = styled.div`
    overflow-y: auto;
    position: absolute;
    width: 90%;
    /* max-height: 550px; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-sizing: border-box;
    border: 2px solid #c3c6ce;
    padding-top: 10px;
    padding-bottom:35px;
    padding-left:25px;
    padding-right:25px;

    z-index: 1000;

    @media screen and (min-width: 420px){
    width: 400px;
    
}
    transition: background-color 0.5s ease;
    &.withe{
        background-color: #e8e8e8;
    }
    &.black{
        background-color: #cccccc;
    }
    
    `


export const BtnCloseModal = styled.button`
    outline: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width:25px;
    height:25px;
    border-radius: 8px;
    transition: background-color 0.5s ease;
    &.withe{
        background-color: #e8e8e8;
        &:hover {
            background-color: #212121;      
        }
        &:hover .icon-close{
            fill: #cccccc;
        }
    }
    &.black{
        background-color: #cccccc;
        &:hover {
            background-color: #212121;      
        }
        &:hover .icon-close{
            fill: #cccccc;
        }
    }
    
    `
export const IconClose = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    transition: fill 0.5s ease;

`


export const TitleForm = styled.h2`
    font-size: 18;
    color: #212121;
    text-align: center;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`


export const BoxLableInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;

`

export const LableInputs = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #333333;
`
export const Inputs = styled.input`
    width: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    border: 2px solid #c3c6ce;
    background-color: #ffffff;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: #212121;
`

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    border: 2px solid #c3c6ce;
    background-color: #ffffff;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    color: #212121;
`

export const RasioInputs = styled.div`

  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 100%;
  font-size: 14px;
  transition: background-color 0.5s ease;
    &.withe{
        background-color: #ffffff;
    }
    &.black{
        background-color: #EEE;
    }
`

export const Radio = styled.label`
  flex: 1 1 auto;
  text-align: center;
`

export const InputStatus = styled.input.attrs({ type: 'radio' })`
    display: none;
    &:checked + .withe {
        background-color: #e8e8e8;
        font-weight: 600;
        color: #212121;
    }
    &:checked + .black {
        background-color: #666666;
        font-weight: 600;
        color: #e8e8e8;
    }
`

export const Name = styled.span`
   
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: .5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all .15s ease-in-out;
    user-select:none;
`


export const BtnSubmit = styled.button`
    padding: 8px 25px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    border: none;
    transition: all 0.5s ease;

    &.withe{
        color:  #212121;
        background-color: #e8e8e8;
        border: 2px solid #c3c6ce; 
        &:hover {
            background-color: #666666;   
            background-color: #666666;   
            color:  #f2f2f2;
            
        }
        
    }
    &.black{
        color:  #212121;
        border: 2px solid #c3c6ce; 
        background-color: #eeeeee;
        &:hover {
            background-color: #666666;
            color: #f2f2f2 ;
        }
    }
`