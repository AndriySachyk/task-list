import styled from "styled-components";


export const ContainerSwitchColor = styled.div`
    width: 360px;
`



export const ToggleSwitch = styled.div`
    position: relative;
    width: 100px;
    height: 50px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
    `

export const SwitchLabel = styled.label`
cursor: pointer;
position: absolute;
width: 100%;
height: 50px;
background-color: var(--dark);
border-radius: 25px;
border: 3px solid var(--dark);
`
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    display: none;
    &:checked ~ .slider {
        background-color: var(--light);
    }
    &:checked ~ .slider::before {
        -webkit-transform: translateX(50px);
        -ms-transform: translateX(50px);
        transform: translateX(50px);
        background-color: var(--dark);
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    
    
    `


export const Slider = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
        box-shadow: inset 12px -4px 0px 0px var(--light);
        background-color: var(--dark);
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }
`

