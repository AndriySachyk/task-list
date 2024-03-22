import styled from "styled-components";

export const ItemTask = styled.li`
    position:relative;
    background-color: #e8e8e8;
    height: 250px;
    padding: 25px 30px;
    border-radius: 14px;
    border: 2px solid #c3c6ce;
    `

export const BoxStatusTitleBtn = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
` 

export const TitleTask = styled.h2`
    max-width: 600px;
    height: 33px;
    display: block;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    overflow-y: auto;
    text-align: center;
    `

export const StatusTask = styled.p`
    font-style: normal;
    width: 250px;
    font-size: 18px;
    font-weight: 500;

`


export const DescriptionTask = styled.p`
    padding: 10px 8px;
    display: block;
    width: 100%;
    height: 135px;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 2px solid #c3c6ce;
    overflow-y: auto;
    word-wrap: break-word;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    
    `


export const BoxButtons = styled.div`
    display: flex;
    gap: 10px;
    width: 250px;
    justify-content: end;
    align-items: center;
`


export const BtnDelete = styled.button`
    padding: 5px;
    
    outline: none;
    border: none;
    background-color: #e8e8e8 ;
    border-radius: 4px;
    transition: background-color 1000ms;
    &:hover{
        background-color: #212121;
        cursor: pointer;
        transition: background-color 1000ms;
        
    }
    &:hover .icon-delete {
        fill: #e8e8e8;
        transition: fill 1000ms;

    }
    `

export const IconDelete = styled.svg`
    fill: #212121;
    width: 35px;
    height: 35px;
    transition: fill 1000ms;
`


export const BtnEditing = styled.button`
    padding: 5px;
  
    outline: none;
    border: none;
    background-color: #e8e8e8 ;
    border-radius: 4px;
    transition: background-color 1000ms;
    &:hover{
        background-color: #212121;
        cursor: pointer;
        transition: background-color 1000ms;
        
    }
    &:hover .icon-editing {
        fill: #e8e8e8;
        transition: fill 1000ms;
        
    }
    `
export const IconEditing = styled.svg`
    fill: #212121;
    width: 35px;
    height: 35px;
    transition: fill 1000ms;
`