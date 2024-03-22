import styled from "styled-components";


export const ContainerTitleClear = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

`

export const BoxTitleIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const TitleClearList = styled.h2`
    /* text-align: center; */
    font-size: 28px;
    font-family: "Open Sans", sans-serif;
    color: #212121;
    font-weight: 400;
    margin: 0;
    `

export const IconPencil = styled.svg`
    fill: #212121;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonAddTask = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    padding: 10px 2em;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    background-color: #e8e8e8;
    cursor: pointer;
    color: #212121;
    transition: all 1000ms;
    position: relative;
    overflow: hidden;
    outline: 2px solid #212121;
    &:hover {
        color: #e8e8e8;
        transform: scale(1.1);
        outline: 2px solid #212121;
        box-shadow: 4px 5px 17px -4px #268391;
        &::before{
            width: 250%;
        }
    }
    &:hover .icon-add{
        fill: #e8e8e8;
        transition: fill 1000ms;
    }
    &::before {
        content: "";
        position: absolute;
        left: -50px;
        top: 0;
        width: 0;
        height: 100%;
        background-color: #212121;
        transform: skewX(45deg);
        z-index: -1;
        transition: width 1000ms;
    }
    `


export const IconCheckmark = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    transition: fill 1000ms;
    fill:#212121;
    `