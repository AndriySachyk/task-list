import styled from "styled-components";


export const RadioInputs = styled.div`

    width: 360px;

    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: #e8e8e8;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    width: 360px;
    font-size: 16px;

`

export const Radio = styled.label`
  flex: 1 1 auto;
  text-align: center;
`


export const InputStatus = styled.input.attrs({type: 'radio' })`
    display: none;
    &:checked + .name {
        background-color: #fff;
        font-weight: 600;
    }
`

export const Name = styled.span`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: .5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all .15s ease-in-out;
    user-select:none;
`