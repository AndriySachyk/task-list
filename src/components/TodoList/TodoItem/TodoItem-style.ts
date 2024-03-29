import styled from "styled-components";

export const ItemTask = styled.li`
    position:relative;
    height: 200px;
    padding: 10px 15px;
    border-radius: 14px;
    border: 2px solid ;
    transition: all 0.5s ease;
    &.withe{
        border-color: #c3c6ce;
        background-color: #e8e8e8;
    }
    &.black{
        color: #e8e8e8;
        border-color: #cccccc;
        background-color: #666666;
    }
    
    
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

export const BoxStatusTask = styled.div`
    width: 70px;
    height: 30px;
`

export const StatusTask = styled.p`
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 12px;
    font-weight: 400;
    
    `
export const StatusTaskValue = styled.p`
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 12px;
    font-weight: 400;
`

export const DescriptionTask = styled.p`
    padding: 10px 8px;
    display: block;
    width: 100%;
    height: 135px;
    border-radius: 8px;
    border: 2px solid;
    overflow-y: auto;
    word-wrap: break-word;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    transition: all 0.5s ease;
    &.withe{
        background-color: #FFFFFF;
        border-color: #c3c6ce;
    }
    &.black{
        color: rgba(51, 65, 85, 1);
        border-color: #f2f2f2;
        background-color: #cccccc;
    }
    
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
    border-radius: 4px;
    transition: all 0.5s ease;
    &.withe {
        background-color: #e8e8e8;
        &:hover .icon-delete {
            fill: #e8e8e8;
        }
    }
    
    &.black{
        background-color: #666666;
        &:hover .icon-delete {
            fill: #666666;
        }
    }
    
    &:hover{
        cursor: pointer;
        transition: all 0.5s ease;
        &.withe {
            background-color: #666666;
        }
        
        &.black{
            background-color: #cccccc;
        }
    }

`

export const IconDelete = styled.svg`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: fill 0.5s ease;
    &.withe {
        fill: #212121;
    }
        
    &.black{
        fill: #e8e8e8;
    }

`


export const BtnEditing = styled.button`
    padding: 5px;
    
    outline: none;
    border: none;
    background-color: #e8e8e8 ;
    border-radius: 4px;
    transition: all 0.5s ease;
    &.withe {
        background-color: #e8e8e8;
        &:hover .icon-editing {
            fill: #e8e8e8;
        }
    }
    
    &.black{
        background-color: #666666;
        &:hover .icon-editing {
            fill: #666666;
        }
    }
    &:hover{
        background-color: #212121;
        cursor: pointer;
        transition: all 0.5s ease;
        &.withe {
            background-color: #666666;
        }
        
        &.black{
            background-color: #cccccc;
        }
    }

`
export const IconEditing = styled.svg`
    fill: #212121;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: fill 0.5s ease;
    &.withe {
        fill: #212121;
    }
        
    &.black{
        fill: #e8e8e8;
    }
`