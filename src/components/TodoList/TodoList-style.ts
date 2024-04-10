import styled from "styled-components";

export const List = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    max-height: 430px;
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
    &::-webkit-scrollbar {
        width: 100%;
        height: 90%;
        position: absolute;
        width: 8px;
        overflow: hidden;
    }
    &::-webkit-scrollbar-track {
        border-radius: 14px;
        background: #ffffff;   
    }
    &::-webkit-scrollbar-thumb {
    background-color: #666666;  
    border-radius: 20px;       

    /* border: 3px solid #e8e8e8;   */
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