import styled from "styled-components";

export const ItemTask = styled.li`
    position:relative;
    background-color: #e8e8e8;
    height: 200px;
    padding: 10px 15px;
    border-radius: 14px;
    border: 2px solid #c3c6ce;
`

export const BoxStatusTitleBtn = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
` 

export const TitleTask = styled.h2`
    height: 22px;
    display: block;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    overflow-y: auto;
    text-align: center;
    `

export const StatusTask = styled.p`
    font-style: normal;
    width: 70px;
    height: 30px;
    font-size: 12px;
    font-weight: 400;

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
    font-size: 14px;
    font-weight: 400;
    
    `


export const BoxButtons = styled.div`
    display: flex;
    gap: 10px;
    /* width: 250px; */
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
    width: 20px;
    height: 20px;
    transition: fill 1000ms;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 20px;
    height: 20px;
    transition: fill 1000ms;
    display: flex;
    align-items: center;
    justify-content: center;
    `