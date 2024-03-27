import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    transition: background-color 0.5s ease;
    
    &.withe{
        background-color: #FFF;
        border-bottom: 2px solid #c3c6ce;    
    }
    &.black {
        border-bottom: 2px solid #666666;    
        background-color: #333333;
        
    }
    
    `

export const BoxHeader = styled.section`
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 420px) {
        width: 420px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    `


export const Title = styled.h1`
    font-size: 22px;
    margin: 0;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
        font-size: 28px;
        
    }
    @media screen and (min-width: 1280px) {
        font-size: 36px;
        
    }
    transition: color 0.5s ease;
    &.withe{
        color: #212121;
    }
    &.black {
        color: #cccccc;

    }


`