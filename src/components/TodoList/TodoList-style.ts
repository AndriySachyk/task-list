import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 14px;
    padding: 10px 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: 2px solid ;
    list-style: none;
    gap: 8px;
    transition: all 0.5s ease;
    &.withe{
        background-color: #fff;
        border-color: #c3c6ce;
    }
    &.black{
        border-color: #f2f2f2;
        background-color: #cccccc;
    }

`
export const NumberOfTasks = styled.h2`
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500 ;
    text-align: center;
    transition: color 0.5s ease;
    &.withe{
        color: #212121;
    }
    &.black{
        color: #cccccc;
    }
`


export const ContainerListBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`