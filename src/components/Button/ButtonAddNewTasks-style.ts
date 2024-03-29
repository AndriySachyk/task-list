import styled from "styled-components"

export const ButtonAddTask = styled.button`
    display: flex;
    gap: 8px;
    padding: 15px 15px;
    border: unset;
    border-radius: 8px;
    z-index: 1;
    position: relative;
    font-weight: 600;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 0.5s ease;
    overflow: hidden;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    border: 2px solid #c3c6ce;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 8px;
        background-color: #212121;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }
    
    &.withe{
        background-color: #ffffff;
        color: rgba(51, 65, 85, 1);
    }
    &.black{
        background-color: #cccccc;
    }
    
    &:hover{
        color: #e8e8e8;
    }
    &:hover .icon-add{
        fill: #e8e8e8;
    }
    &:hover::before {
        width: 100%;
    }


`


export const IconCheckmark = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    transition: fill 0.5s ease;
    fill: #212121;
   
`