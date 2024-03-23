import { styled } from 'styled-components';


export const MainPage = styled.div`
    display: block;
    width: 100%;
    min-height: 100vh;
    & .withe{
        background-color: #e8e8e8;
    }
    & .dark {
        background-color: #212121;
    }
    `


export const Container  = styled.section`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 75px;
    padding-bottom: 25px;
@media screen and (min-width: 420px){
    width: 420px;
    
}
    
`