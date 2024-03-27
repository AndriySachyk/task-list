import styled from "styled-components";


export const RadioInputs = styled.div`
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: flex;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 5px;
    width: 95%;
    font-size: 14px;
    
    transition: background-color 0.5s ease;
    &.withe{
        background-color: #ffffff;
    }
    &.black{
        background-color: #cccccc;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }


`

export const Radio = styled.label`
  flex: 1 1 auto;
  text-align: center;
`


export const InputStatus = styled.input.attrs({type: 'radio' })`
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