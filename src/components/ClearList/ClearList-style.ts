import styled from "styled-components";


export const ContainerTitleClear = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

`

export const BoxTitleIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
`

export const TitleClearList = styled.h2`
    text-align: center;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    color: #212121;
    font-weight: 400;
    margin: 0;
    transition: color 0.5s ease;
    &.withe{
        color: #212121;
    }
    &.black {
        color: #cccccc;
        
    }
    `

export const IconPencil = styled.svg`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: fill 0.5s ease;
    &.withe{
        fill: #212121;
    }
    &.black {
        fill: #cccccc;

    } 
`

